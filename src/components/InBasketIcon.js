import React, { useEffect, useState } from "react";
import styles from '../styles/InBasketIcon.module.css';
import { useMyContext } from '../MyContext';

function InBasketIcon () {
    const { quantity } = useMyContext();

    return (
        <div className={styles.iconContainer}>
            <p className={styles.icon}>{quantity}</p>
        </div>
    )
};

export default InBasketIcon;