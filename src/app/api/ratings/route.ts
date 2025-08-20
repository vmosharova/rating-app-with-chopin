import { NextRequest, NextResponse } from 'next/server';
import { Oracle, getAddress } from '@chopinframework/next';

const validateAndGetAddress = async () => {
  try {
    const address = await getAddress();
    if (!address) {
      throw new Error('Unauthorized: no address');
    }
    return address;
  } catch {
    throw new Error('Unauthorized: could not get address');
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const address = await validateAndGetAddress();
    const { productName, productDescription } = body; 

    const submittedAt = await Oracle.now();
    const result = { address, productName, productDescription, submittedAt };

    return NextResponse.json({
      success: true,
      message: 'Rating submitted successfully',
      data: result
    });

  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}