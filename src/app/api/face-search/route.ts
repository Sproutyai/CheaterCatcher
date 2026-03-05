import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase';
import { generateMockResults } from '@/lib/mock-data';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const photo = formData.get('photo') as File | null;
    const name = formData.get('name') as string;
    const city = formData.get('city') as string;
    const age = formData.get('age') as string;
    const instagram = formData.get('instagram') as string;
    const searchId = formData.get('searchId') as string;
    const email = formData.get('email') as string;

    if (!photo) {
      return NextResponse.json(
        { error: 'Photo is required for face search' },
        { status: 400 }
      );
    }

    const supabase = createServiceClient();

    // Upload photo to Supabase Storage `faces` bucket
    const fileExt = photo.name.split('.').pop() || 'jpg';
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
    const arrayBuffer = await photo.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('faces')
      .upload(fileName, buffer, {
        contentType: photo.type || 'image/jpeg',
        upsert: false,
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return NextResponse.json(
        { error: 'Failed to upload photo' },
        { status: 500 }
      );
    }

    const photoUrl = uploadData?.path
      ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/faces/${uploadData.path}`
      : null;

    // Log search
    if (searchId) {
      await supabase
        .from('searches')
        .update({ target_photo_url: photoUrl, status: 'processing' })
        .eq('id', searchId);
    }

    // TODO: Future integration points:
    // 1. Generate face embedding via InsightFace/Replicate
    //    const embedding = await generateFaceEmbedding(photoUrl);
    //
    // 2. Search against pgvector index of known faces
    //    const { data: matches } = await supabase.rpc('match_faces', {
    //      query_embedding: embedding,
    //      match_threshold: 0.7,
    //      match_count: 20
    //    });
    //
    // 3. Return real matched posts
    //    return NextResponse.json({ results: matches, count: matches.length });

    // For now: return mock results
    const mockResults = generateMockResults(name || 'Unknown', city, 7);

    // Update search with results count
    if (searchId) {
      await supabase
        .from('searches')
        .update({ results_count: mockResults.length, status: 'completed' })
        .eq('id', searchId);
    }

    return NextResponse.json({
      results: mockResults,
      count: mockResults.length,
      photoUploaded: true,
      photoPath: uploadData?.path || null,
      query: {
        name,
        city,
        age: age ? parseInt(age) : null,
        instagram: instagram || null,
        hasPhoto: true,
      },
    });
  } catch (err) {
    console.error('Face search error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
