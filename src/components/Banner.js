import React from "react";
import styles from '../styles/Products.module.css';

function Banner () {

    return (
        <div className={styles.bannerContainer}>
            <span className={styles.banner} role="img" aria-label="Banner of mockups of the Jelly Gems packaging."/>
        </div>
    )
};

export default Banner;