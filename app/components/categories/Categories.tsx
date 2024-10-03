import React from 'react';
import '../../globals.css';
import styles from './categories.module.css';

interface CategoriesProps {
    imageSrc: string;
    altText: string;
    number: number;
    title: string;
    description: string;
}

const Categories: React.FC<CategoriesProps> = ({ imageSrc, altText, number, title, description }) => {
    return (
        <div className={styles.categories}>
            <img src={imageSrc} alt={altText} className={styles.categoriesImg} />
            <div className={styles.categoriesDescription}>
                <h2 className={styles.categoriesH2}>{number}</h2>
                <b className={styles.categoriesB}>{title}</b>
                <p className={styles.categoriesP}>{description}</p>
            </div>
        </div>
    );
}

export default Categories;