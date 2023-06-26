import { fetchFilm } from '@/services/fetchFilms';
import styles from './page.module.scss';
import { IFilm } from '@/models/IFilm';
import Image from 'next/image';
import DetailsItem from './DetailsItem';
import { fetchReview } from '@/services/fetchReviews';
import { IReview } from '@/models/IReview';
import ReviewCard from './ReviewCard';
import { genreDictionary } from '@/helpers/genreDictionary';
import CountControl from '@/components/CountControl/CountControl';

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { title } = await fetchFilm(params.id);
    return {
        title: title,
    };
}

export default async function Film({ params }: { params: { id: string } }) {
    const [{ posterUrl, title, genre, releaseYear, director, rating, description, id }, reviews] =
        await Promise.all([
            fetchFilm(params.id) as Promise<IFilm>,
            fetchReview(params.id) as Promise<IReview[]>,
        ]);

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <div className={styles.filmImgContainer}>
                    <Image src={posterUrl} alt="" width={400} height={500} />
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.topContainer}>
                        <div className={styles.title}>
                            {title}

                            <CountControl filmId={id} />
                        </div>

                        <div className={styles.details}>
                            <DetailsItem
                                styles={styles}
                                title="Жанр:"
                                content={genreDictionary(genre)}
                            />

                            <DetailsItem
                                styles={styles}
                                title="Год выпуска:"
                                content={releaseYear}
                            />

                            <DetailsItem styles={styles} title="Рейтинг:" content={rating} />

                            <DetailsItem styles={styles} title="Режиссер:" content={director} />
                        </div>
                    </div>

                    <div className={styles.description}>
                        <div className={styles.descriptionTitle}>Описание</div>

                        <div className={styles.descriptionContent}>{description}</div>
                    </div>
                </div>
            </div>

            {reviews.map((review) => (
                <ReviewCard
                    styles={styles}
                    key={review.id}
                    name={review.name}
                    rating={review.rating}
                    text={review.text}
                    src={review.src}
                />
            ))}
        </div>
    );
}
