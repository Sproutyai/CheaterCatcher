import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const photo = formData.get('photo') as File | null;
    const name = formData.get('name') as string;
    const location = formData.get('location') as string;

    if (!photo) {
      return NextResponse.json(
        { error: 'Photo is required for face search' },
        { status: 400 }
      );
    }

    // TODO: Integrate with AWS Rekognition or similar
    // 1. Upload photo to Supabase Storage
    // 2. Send to face comparison service
    // 3. Match against indexed faces in the `faces` table
    // 4. Return matches with confidence scores

    // Placeholder response
    return NextResponse.json({
      matches: [],
      count: 0,
      message: 'Face search will be integrated with AWS Rekognition',
      query: { name, location, hasPhoto: true },
    });
  } catch (err) {
    console.error('Face search error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
