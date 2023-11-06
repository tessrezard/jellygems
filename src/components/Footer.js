import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from '../styles/Footer.module.css';
import headerStyles from '../styles/Header.module.css';


function Footer() {

    const location = useLocation();

    return (
        <>
            <footer>
                <div className={styles.footerContainer}>
                    <Link
                        to="about"
                        className={`${headerStyles.navItem} ${location.pathname === '/about' ? headerStyles.activeNav : ''}`}
                    > About
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Footer;