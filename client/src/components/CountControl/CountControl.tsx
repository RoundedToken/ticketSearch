'use client';
import React, { FC, useState } from 'react';
import styles from './CountControl.module.scss';
import decrementImg from '../../../public/decrement.svg';
import Image from 'next/image';
import incrementImg from '../../../public/increment.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { decrementCount, incrementCount } from '@/redux/cartSlice';
import ModalDelete from '../ModalDelete/ModalDelete';

interface ICountControl {
    filmId: string;
    cartMode?: boolean;
}

const CountControl: FC<ICountControl> = ({ filmId, cartMode = false }) => {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.cartSlice.tickets[filmId]) | 0;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const decrementOnClick = () => {
        if (cartMode && count === 1) setIsModalOpen(true);
        else dispatch(decrementCount(filmId));
    };
    const incrementOnClick = () => {
        dispatch(incrementCount(filmId));
    };

    return (
        <div className={styles.root}>
            {isModalOpen && <ModalDelete id={filmId} alternativeSwitch={setIsModalOpen} />}

            <button className={styles.button} onClick={decrementOnClick} disabled={count === 0}>
                <Image
                    className={styles.img}
                    src={decrementImg}
                    alt="Decrement"
                    width={12}
                    height={12}
                />
            </button>

            <div className={styles.count}>{count}</div>

            <button className={styles.button} onClick={incrementOnClick} disabled={count >= 30}>
                <Image
                    className={styles.img}
                    src={incrementImg}
                    alt="Increment"
                    width={12}
                    height={12}
                />
            </button>
        </div>
    );
};

export default CountControl;
