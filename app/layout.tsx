"use client";
import React from 'react';
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import imageRetroPcs from "../public/image-retro-pcs.jpg";
import imageTopLaptops from "../public/image-top-laptops.jpg";
import imageGamingGrowth from "../public/image-gaming-growth.jpg";
import Hero from "./components/hero/Hero";
import News from "./components/news/News";
import styles from './layout.module.css';

const Layout = () => {
    return (
        <html lang="en">
        <body>
        <div className="home">
            <Header/>
            <main className={styles.layoutMainContent}>
                <Hero/>
                <News/>
            </main>
            <div className={styles.layoutCategoriesContent}>
                <Categories
                    imageSrc={imageRetroPcs.src}
                    altText="Retro PCs"
                    number={1}
                    title="Reviving Retro PCs"
                    description="What happens when old PCs are given modern upgrades?"
                />

                <Categories
                    imageSrc={imageTopLaptops.src}
                    altText="Top Laptops"
                    number={2}
                    title="Top 10 Laptops of 2022"
                    description="Our best picks of various needs and budgets."
                />

                <Categories
                    imageSrc={imageGamingGrowth.src}
                    altText="Gaming Growth"
                    number={3}
                    title="The Growth of Gaming"
                    description="How the pandemic has sparked fresh opportunities."
                />
            </div>
        </div>
        </body>
        </html>
    );
};

export default Layout;