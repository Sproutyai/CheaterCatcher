import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';
import { generateOverviewData, generateMockResults } from '@/lib/mock-data';

export async function POST(request: NextRequest) {
  try {
    const { searchId, email } = await request.json();

    if (!searchId && !email) {
      return NextResponse.json(
        { error: 'searchId or email is required' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // Look up the search
    let search = null;
    if (searchId) {
      const { data } = await supabase
        .from('searches')
        .select('*')
        .eq('id', searchId)
        .single();
      search = data;
    } else if (email) {
      const { data } = await supabase
        .from('searches')
        .select('*')
        .eq('email', email)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      search = data;
    }

    const targetName = search?.target_name || search?.search_name || 'Unknown';
    const targetCity = search?.target_city || search?.search_location || undefined;

    // Generate overview data
    const overview = generateOverviewData(targetName, targetCity);
    const results = generateMockResults(targetName, targetCity, overview.totalPosts);

    return NextResponse.json({
      searchId: search?.id || searchId,
      targetName,
      targetCity,
      overview,
      results,
    });
  } catch (err) {
    console.error('Overview error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
