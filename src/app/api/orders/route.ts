import { mockOrders } from '@/types/Order';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(mockOrders);
}
