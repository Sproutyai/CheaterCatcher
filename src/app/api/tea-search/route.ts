import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { name, location } = await request.json();

    if (!name || !location) {
      return NextResponse.json(
        { error: 'Name and location are required' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // Search posts by name match
    const { data: results, error } = await supabase
      .from('posts')
      .select(`
        id,
        content,
        post_date,
        image_urls,
        groups (
          name,
          city,
          state
        )
      `)
      .or(`content.ilike.%${name}%,mentioned_names.cs.{${name}}`)
      .limit(50);

    if (error) {
      console.error('Search error:', error);
      return NextResponse.json({ error: 'Search failed' }, { status: 500 });
    }

    return NextResponse.json({
      results: results || [],
      count: results?.length || 0,
      query: { name, location },
    });
  } catch (err) {
    console.error('Tea search error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
