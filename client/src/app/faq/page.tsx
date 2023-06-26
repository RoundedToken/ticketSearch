import styles from './page.module.scss';
import FaqAccordion from './FaqAccordion';

export const metadata = {
    title: 'Вопросы-ответы',
};

export default function Faq() {
    return (
        <div className={styles.root}>
            <div className={styles.title}>Вопросы-ответы</div>

            <FaqAccordion />
        </div>
    );
}
