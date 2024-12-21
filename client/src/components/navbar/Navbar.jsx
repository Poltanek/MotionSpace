import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../navbar/Navbar.module.css';
import { Spin as Hamburger } from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false); // Track header visibility
    let lastScrollPosition = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition === 0) {
                // When at the very top, always show the header
                setIsHidden(false);
            } else if (currentScrollPosition > lastScrollPosition) {
                // Scrolling down, hide the header
                setIsHidden(true);
            }
            lastScrollPosition = currentScrollPosition;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`${styles.header} ${isHidden ? styles.hidden : ''}`}
        >
            <div className={styles.container}>
                <a href="/" className={styles.logo}></a>
                <div className={styles.hamburger}>
                    <Hamburger
                        color="rgb(255, 255, 255)"
                        toggled={isOpen}
                        toggle={toggleNavbar}
                    />
                </div>
                <nav
                    className={`${styles.navbar} ${
                        isOpen ? styles.active : ''
                    }`}
                >
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link to="/" className={styles.link}>
                                ABOUT ME
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
