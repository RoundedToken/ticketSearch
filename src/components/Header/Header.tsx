import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import cartImg from '../../../public/cart.svg';
import CartCount from './CartCount';

const Header = () => {
    return (
        <header className={styles.root}>
            <Link href="/" className={styles.title}>
                Билетопоиск
            </Link>

            <Link href="/cart" className={styles.cart}>
                <CartCount styles={styles} />

                <Image src={cartImg} alt="Cart" width={32} height={32} />
            </Link>
        </header>
    );
};

export default Header;
