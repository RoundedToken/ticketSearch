'use client';
import React, { FC } from 'react';
import styles from './TicketCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import CountControl from '../CountControl/CountControl';
import { genreDictionary } from '@/helpers/genreDictionary';
import ModalDelete from '../ModalDelete/ModalDelete';

interface ITicketCard {
    id: string;
    posterUrl: string;
    title: string;
    genre: string;
    cartMode?: boolean;
}

const TicketCard: FC<ITicketCard> = ({ id, cartMode = false, posterUrl, title, genre }) => {
    return (
        <div className={styles.root}>
            <div className={styles.imgContainer}>
                <Image
                    src={posterUrl}
                    alt="Ticket image"
                    width={100}
                    height={120}
                    priority={true}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.description}>
                    <Link href={`/film/${id}`} className={styles.title}>
                        {title}
                    </Link>

                    <div className={styles.genre}>{genreDictionary(genre)}</div>
                </div>

                <CountControl filmId={id} cartMode={cartMode} />

                {cartMode && <ModalDelete id={id} />}
            </div>
        </div>
    );
};

export default TicketCard;
