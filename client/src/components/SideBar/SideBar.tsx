'use client';
import React from 'react';
import styles from './SideBar.module.scss';
import FilterByCinema from './FilterByCinema';
import FilterByGenre from './FilterByGenre';
import FilterByName from './FilterByName';

const SideBar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.rootTitle}>Фильтр поиска</div>

            <div className={styles.filter}>
                <FilterByName styles={styles} />

                <FilterByGenre />

                <FilterByCinema />
            </div>
        </div>
    );
};

export default SideBar;
