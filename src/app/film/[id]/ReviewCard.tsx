import Image from 'next/image';
import React, { FC } from 'react';
import imageImg from '../../../../public/image.svg';

interface IReviewCard {
    styles: {
        readonly [key: string]: string;
    };
    name: string;
    text: string;
    rating: number;
    src: string;
}

const ReviewCard: FC<IReviewCard> = ({ styles, name, text, rating, src }) => {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.imgContainer}>
                <Image src={src ? src : imageImg} alt="defaultImg" width={32} height={32} />
            </div>

            <div className={styles.reviewCardContent}>
                <div className={styles.reviewCardContentTitle}>
                    <div className={styles.reviewCardContentTitleName}>{name}</div>

                    <div className={styles.reviewCardContentTitleRating}>
                        Оценка:
                        <div className={styles.reviewCardContentTitleRatingCount}>{rating}</div>
                    </div>
                </div>

                <div className={styles.reviewCardContentText}>{text}</div>
            </div>
        </div>
    );
};

export default ReviewCard;
