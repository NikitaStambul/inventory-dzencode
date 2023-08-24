import { mockProducts } from '@/types/Product';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(mockProducts);
}
