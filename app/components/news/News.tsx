import React from "react";
import '../../globals.css';
import styles from './news.module.css';

const News: React.FC = () => {
    return (
        <div className={styles.sidebar}>
            <h1>New</h1>
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr />
            <h2>The Downsides of AI Artistry</h2>
            <p>What are the drawbacks of using AI in the creative industry?</p>
            <hr />
            <h2>Is VC Funding Drying Up?</h2>
            <p>Private venture capital has seen a slowdown, but is it just temporary?</p>
        </div>
    );
};

export default News;