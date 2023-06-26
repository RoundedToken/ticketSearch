import CartList from './CartList';
import styles from './page.module.scss';

export const metadata = {
    title: 'Корзина',
};

export default function Cart() {
    return <CartList styles={styles} />;
}
