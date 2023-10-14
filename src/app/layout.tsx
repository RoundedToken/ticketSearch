import Header from '@/components/Header/Header';
import '../styles/globals.scss';
import { Roboto } from 'next/font/google';
import { ReduxProvider } from '@/redux/provider';
import Link from 'next/link';

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    variable: '--font-roboto',
    preload: true,
});

export const metadata = {
    title: 'Билетопоиск',
    description: 'Поиск билетов в кинотеатр',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={`${roboto.variable}`}>
                <ReduxProvider>
                    <Header />

                    <main>{children}</main>

                    <footer>
                        <Link className="link" href="/faq">
                            Вопросы-ответы
                        </Link>

                        <Link className="link" href="/about">
                            О нас
                        </Link>
                    </footer>
                </ReduxProvider>
            </body>
        </html>
    );
}
