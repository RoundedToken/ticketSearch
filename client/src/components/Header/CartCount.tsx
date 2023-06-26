'use client';
import { RootState } from '@/redux/store';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

interface ICartCount {
    styles: {
        readonly [key: string]: string;
    };
}

const CartCount: FC<ICartCount> = ({ styles }) => {
    const count = Object.values(useSelector((state: RootState) => state.cartSlice.tickets)).reduce(
        (prev, curr) => prev + curr,
        0
    );

    if (count === 0) return null;

    return <div className={styles.cartCount}>{count}</div>;
};

export default CartCount;
