import { NextRequest, NextResponse } from 'next/server';
import { getById } from '../utils';
import { movies } from '../mock';

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const movieId = params.get('movieId') as string;
    let result = null;

    if (movieId) {
        result = getById(movies)(movieId);
    }

    return NextResponse.json(result);
}
