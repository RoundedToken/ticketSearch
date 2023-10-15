import { IFilm } from '@/models/IFilm';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fetchFilm = async (id: string) => {
    const res = await fetch(`${process.env.API_URL}/movie?movieId=${id}`).then((res) => res);

    return res.json();
};

export const filmsApi = createApi({
    reducerPath: 'films',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (builder) => ({
        fetchAllFilms: builder.query<IFilm[], string>({
            query: (cinema) => {
                if (cinema === '') return `/movies`;
                return `/movies?cinemaId=${cinema}`;
            },
        }),
    }),
});
export const { useFetchAllFilmsQuery } = filmsApi;
