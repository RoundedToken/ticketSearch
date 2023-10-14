import React, { FC } from 'react';
import styles from './TicketCardSkeleton.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ITicketCardSkeleton {
    cartMode?: boolean;
}

const TicketCardSkeleton: FC<ITicketCardSkeleton> = ({ cartMode = false }) => {
    return (
        <div className={styles.root}>
            <Skeleton height={120} width={100} containerClassName={styles.skeleton} />

            <div className={styles.content}>
                <div className={styles.description}>
                    <Skeleton height={20} containerClassName={styles.skeleton} />

                    <div className={styles.genre}>
                        <Skeleton width={100} containerClassName={styles.skeleton} />
                    </div>
                </div>

                <Skeleton width={68} height={20} containerClassName={styles.skeleton} />

                {cartMode && (
                    <Skeleton width={20} height={20} containerClassName={styles.skeleton} />
                )}
            </div>
        </div>
    );
};

export default TicketCardSkeleton;
