import React from 'react';
import styles from './hero.module.css';

const Hero: React.FC = () => {
    return (
        <div className={styles.heroContent}>
            <div className={styles.mainImage}></div>
            <div className={styles.headline}>
                <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className={styles.description}>
                <p>
                    We dive into the next evolution of the web that claims to put the power
                    of the platforms back into the hands of the people.
                    But is it really fulfilling its promise?
                </p>
                <button className={styles.heroButton}>Read more</button>
            </div>
        </div>
    );
};

export default Hero;