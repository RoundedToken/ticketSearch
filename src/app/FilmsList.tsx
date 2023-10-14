'use client';
import TicketCard from '@/components/TicketCard/TicketCard';
import TicketCardSkeleton from '@/components/TicketCardSkeleton/TicketCardSkeleton';
import { genreDictionary } from '@/helpers/genreDictionary';
import { RootState } from '@/redux/store';
import { useFetchAllFilmsQuery } from '@/services/fetchFilms';
import React from 'react';
import { useSelector } from 'react-redux';

const FilmsList = ({ styles }: { styles: Record<string, string> }) => {
    const filterByName = useSelector((state: RootState) => state.filterSlice.byName);
    const filterByGenre = useSelector((state: RootState) => state.filterSlice.byGenre);
    const filterByCinema = useSelector((state: RootState) => state.filterSlice.byCinema);
    const { data, isFetching } = useFetchAllFilmsQuery(filterByCinema.value);
    const filteredData = data
        ?.filter((film) => film.title.toLowerCase().includes(filterByName.toLowerCase()))
        ?.filter((film) =>
            filterByGenre.value === '' ? true : genreDictionary(film.genre) === filterByGenre.value
        );

    if (isFetching)
        return (
            <div className={styles.ticketsList}>
                {Array(4)
                    .fill(null)
                    .map((_, i) => (
                        <TicketCardSkeleton key={i} />
                    ))}
            </div>
        );

    if (filteredData) {
        if (filteredData.length === 0)
            return <div className={styles.notFound}>Ничего не найдено, попробуйте еще раз!</div>;

        return (
            <div className={styles.ticketsList}>
                {filteredData.map((film) => (
                    <TicketCard
                        id={film.id}
                        key={film.id}
                        title={film.title}
                        genre={film.genre}
                        posterUrl={film.posterUrl}
                    />
                ))}
            </div>
        );
    }

    return null;
};

export default FilmsList;
