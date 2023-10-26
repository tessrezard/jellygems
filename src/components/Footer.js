import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from '../styles/Footer.module.css';
import headerStyles from '../styles/Header.module.css';


function Footer() {

    const location = useLocation();

    return (
        <>
            <div className={styles.footerContainer}>
                <Link
                    to="home"
                    className={`${headerStyles.navItem} ${location.pathname === '/home' ? headerStyles.activeNav : ''}`}
                    > Home
                </Link>
                <Link 
                    to="products"
                    className={`${headerStyles.navItem} ${location.pathname === '/products' ? headerStyles.activeNav : ''}`}
                    > Products 
                </Link>
                <Link 
                    to="basket"
                    className={`${headerStyles.navItem} ${location.pathname === '/basket' ? headerStyles.activeNav : ''}`}
                    > Basket 
                </Link>
                <Link 
                    to="about"
                    className={`${headerStyles.navItem} ${location.pathname === '/about' ? headerStyles.activeNav : ''}`}
                    > About 
                </Link>
                <Link 
                    to="donate"
                    className={`${headerStyles.navItem} ${location.pathname === '/donate' ? headerStyles.activeNav : ''}`}
                    > Donate 
                </Link>

            </div>



        </>
    )
}

export default Footer;