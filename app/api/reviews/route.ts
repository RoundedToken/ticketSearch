import { NextRequest, NextResponse } from 'next/server';
import { getById } from '../utils';
import { movies, reviews } from '../mock';

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const movieId = params.get('movieId') as string;
    let result = reviews;

    if (movieId) {
        const movie = getById(movies)(movieId);
        if (movie) {
            result = movie.reviewIds.map(getById(result));
        }
    }

    return NextResponse.json(result);
}
