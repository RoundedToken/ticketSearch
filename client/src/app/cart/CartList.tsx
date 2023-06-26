'use client';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { FC } from 'react';
import { useFetchAllFilmsQuery } from '@/services/fetchFilms';
import TicketCardSkeleton from '@/components/TicketCardSkeleton/TicketCardSkeleton';
import TicketCard from '@/components/TicketCard/TicketCard';
import { genreDictionary } from '@/helpers/genreDictionary';
import CartSum from './CartSum';

interface ICartList {
    styles: {
        readonly [key: string]: string;
    };
}

const CartList: FC<ICartList> = ({ styles }) => {
    const cartIdList = useSelector((state: RootState) => state.cartSlice.idList);
    const { data, isFetching } = useFetchAllFilmsQuery('');

    if (isFetching)
        return (
            <div className={styles.root}>
                {Array(4)
                    .fill(null)
                    .map((_, i) => (
                        <TicketCardSkeleton key={i} cartMode={true} />
                    ))}
            </div>
        );

    if (data) {
        if (cartIdList.length === 0)
            return <div className={styles.notFound}>Корзина пока что пустая...</div>;

        return (
            <div className={styles.root}>
                {data
                    .filter((film) => cartIdList.includes(film.id))
                    .map((film) => (
                        <TicketCard
                            key={film.id}
                            id={film.id}
                            title={film.title}
                            genre={genreDictionary(film.genre)}
                            posterUrl={film.posterUrl}
                            cartMode={true}
                        />
                    ))}

                <CartSum styles={styles} />
            </div>
        );
    }

    return null;
};

export default CartList;
