import React, { FC } from 'react';

interface IDetailsItem {
    styles: {
        readonly [key: string]: string;
    };
    title: string;
    content: string | number;
}

const DetailsItem: FC<IDetailsItem> = ({ styles, title, content }) => {
    return (
        <div className={styles.detailsItem}>
            <div className={styles.detailsItemTitle}>{title}</div>

            <div className={styles.detailsItemContent}>{content}</div>
        </div>
    );
};

export default DetailsItem;
