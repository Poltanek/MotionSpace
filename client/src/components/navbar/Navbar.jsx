import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../navbar/Navbar.module.css';
import { Spin as Hamburger } from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    let lastScrollPosition = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition === 0) {s
                setIsHidden(false); // Show header at the top
            } else if (currentScrollPosition > lastScrollPosition) {
                setIsHidden(true); // Hide header when scrolling down
            } else {
                setIsHidden(false); // Show header when scrolling up
            }
            lastScrollPosition = currentScrollPosition;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen); // Toggle open/close state when hamburger is clicked
    };

    const closeNavbar = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <header
            className={`${styles.header} ${isHidden ? styles.hidden : ''}`}
        >
            {/* Logo */}
            <a href="/" className={styles.logo}>Adam Tanweer</a>
            {/* Headline */}
            <div className={styles.headline}>Portfolio</div>
            {/* Navbar Container */}
            <div className={styles.container}>
                {/* Hamburger Icon */}
                <div className={styles.hamburger}>
                    <Hamburger
                        color="rgb(255, 255, 255)"
                        toggled={isOpen}
                        toggle={toggleNavbar} // Toggles isOpen state
                    />
                </div>
                {/* Navbar Menu */}
                <nav
                    className={`${styles.navbar} ${isOpen ? styles.active : ''}`}
                >
                    <ul className={styles.navList}>
                        <li><Link to="/" onClick={closeNavbar}>Home</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
