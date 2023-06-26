'use client';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

type TCartSum = {
    styles: {
        readonly [key: string]: string;
    };
};

const CartSum = ({ styles }: TCartSum) => {
    const count = Object.values(useSelector((state: RootState) => state.cartSlice.tickets)).reduce(
        (prev, curr) => prev + curr,
        0
    );

    if (count === 0) return null;

    return (
        <div className={styles.cartSum}>
            <div>Итого билетов:</div>

            {count}
        </div>
    );
};

export default CartSum;
