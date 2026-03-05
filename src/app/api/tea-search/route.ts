import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';
import { generateMockResults } from '@/lib/mock-data';

export async function POST(request: NextRequest) {
  try {
    const { name, age, city, instagram, email, sessionId, searchMode } =
      await request.json();

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // Create search record
    const { data: search, error: searchError } = await supabase
      .from('searches')
      .insert({
        session_id: sessionId || null,
        email: email || null,
        target_name: name,
        target_age: age ? parseInt(age) : null,
        target_city: city || null,
        target_instagram: instagram || null,
        search_mode: searchMode || 'self',
        status: 'processing',
      })
      .select('id')
      .single();

    if (searchError) {
      console.error('Search insert error:', searchError);
    }

    const searchId = search?.id;

    // TODO: Future integration — search real indexed posts
    // const { data: results, error } = await supabase
    //   .from('posts')
    //   .select(`
    //     id, content, post_date, image_urls,
    //     groups (name, city, state)
    //   `)
    //   .or(`content.ilike.%${name}%,mentioned_names.cs.{${name}}`)
    //   .limit(50);

    // For now: return mock results
    const mockResults = generateMockResults(name, city, Math.floor(Math.random() * 3) + 6);

    // Update search with results
    if (searchId) {
      await supabase
        .from('searches')
        .update({ results_count: mockResults.length, status: 'completed' })
        .eq('id', searchId);
    }

    return NextResponse.json({
      searchId,
      results: mockResults,
      count: mockResults.length,
      query: { name, age, city, instagram },
    });
  } catch (err) {
    console.error('Tea search error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
