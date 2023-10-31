import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from '../styles/Footer.module.css';
import headerStyles from '../styles/Header.module.css';


function Footer() {

    const location = useLocation();
    const [returnsPolicy, setReturnsPolicy] = useState(false);

    return (
        <>
            <div className={styles.footerContainer}>


                <Link
                    to="about"
                    className={`${headerStyles.navItem} ${location.pathname === '/about' ? headerStyles.activeNav : ''}`}
                > About
                </Link>


            </div>



        </>
    )
}

export default Footer;