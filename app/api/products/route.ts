import { NextRequest, NextResponse } from 'next/server';
import { getData } from '@/lib/api';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const result = await getData(searchParams);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error,
    });
  }
}
