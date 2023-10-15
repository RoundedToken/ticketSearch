import { NextRequest, NextResponse } from 'next/server';
import { getById } from '../utils';
import { cinemas, movies } from '../mock';

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const cinemaId = params.get('cinemaId') as string;
    let result = movies;

    if (cinemaId) {
        const cinema = getById(cinemas)(cinemaId);

        if (cinema) {
            result = cinema.movieIds.map(getById(result));
        }
    }

    return NextResponse.json(result);
}
