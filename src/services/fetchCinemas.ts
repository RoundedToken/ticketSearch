import { ICinema } from '@/models/ICinema';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const cinemasApi = createApi({
    reducerPath: 'cinemas',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.serverUrl }),
    endpoints: (builder) => ({
        fetchCinemas: builder.query<ICinema[], undefined>({
            query: () => `/cinemas`,
        }),
    }),
});

export const { useFetchCinemasQuery } = cinemasApi;
