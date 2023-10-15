import { NextResponse } from 'next/server';
import { cinemas } from '../mock';

export async function GET() {
    return NextResponse.json(cinemas);
}
