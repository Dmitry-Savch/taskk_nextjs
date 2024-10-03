import React, { useState } from 'react';
import iconMenu from '../../../public/menu.svg';
import iconMenuClose from '../../../public/icon-menu-close.svg';
import logo from '../../../public/logo.svg';
import '../../globals.css';
import styles from './header.module.css';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenuClick = (): void => {
        setMenuOpen(true);
    };

    const handleCloseClick = (): void => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <img src={logo.src} alt="Logo" />
            <div className={styles.burgerMenu}>
                <img
                    src={iconMenu}
                    alt="Menu"
                    className={styles.menuIcon}
                    onClick={handleMenuClick}
                    style={{ display: menuOpen ? 'none' : 'block' }}
                />
                <img
                    src={iconMenuClose}
                    alt="Close"
                    className={styles.closeIcon}
                    onClick={handleCloseClick}
                    style={{ display: menuOpen ? 'block' : 'none' }}
                />
            </div>
            <nav className={`${styles.menu} ${menuOpen ? styles.active : ''}`}>
                <a href="#">Home</a>
                <a href="#">New</a>
                <a href="#">Popular</a>
                <a href="#">Trending</a>
                <a href="#">Categories</a>
            </nav>
        </header>
    );
}

export default Header;