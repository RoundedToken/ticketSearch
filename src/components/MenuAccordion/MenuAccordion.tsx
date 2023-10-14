'use client';
import React, { useCallback, useContext, useState } from 'react';
import styles from './MenuAccordion.module.scss';
import arrowImg from '../../../public/arrow.svg';
import Image from 'next/image';

const MenuContext = React.createContext<any>(null);

const MenuAccordion = ({ children }: { children: React.ReactNode }) => {
    const [activeGroup, setActiveGroup] = useState<string | null>();

    const switchGroup = useCallback((title: string) => {
        setActiveGroup((activeTitle) => (activeTitle === title ? null : title));
    }, []);

    return (
        <MenuContext.Provider value={{ activeGroup, switchGroup }}>{children}</MenuContext.Provider>
    );
};

MenuAccordion.Group = function MenuGroup({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    const { activeGroup, switchGroup } = useContext(MenuContext);

    return (
        <div className={styles.group} onClick={() => switchGroup(title)}>
            {title}

            {activeGroup === title && <>{children}</>}

            <Image
                className={`${styles.arrow} ${activeGroup === title && styles.arrowRotate}`}
                src={arrowImg}
                alt="Arrow"
                width={32}
                height={32}
            />
        </div>
    );
};

MenuAccordion.Item = function MenuItem({ title }: { title: string }) {
    return <div className={styles.item}>{title}</div>;
};

export default MenuAccordion;
