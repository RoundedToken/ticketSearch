import SideBar from '@/components/SideBar/SideBar';
import styles from './page.module.scss';
import FilmsList from './FilmsList';

export default async function Home() {
    return (
        <div className={styles.root}>
            <SideBar />

            <FilmsList styles={styles} />
        </div>
    );
}
