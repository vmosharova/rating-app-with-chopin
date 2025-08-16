import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productName, productDescription } = body;

    return NextResponse.json({
      success: true,
      message: 'Rating submitted successfully',
      data: {
        productName,
        productDescription,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}