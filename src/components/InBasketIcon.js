import React, { useEffect, useState } from "react";
import styles from '../styles/InBasketIcon.module.css';
import { useMyContext } from '../MyContext';

function InBasketIcon () {
    const { quantity } = useMyContext();

    return (
        <div className={styles.iconContainer}>
            <div className={styles.icon}>
                <div>
                    {quantity}
                </div>
                </div>
        </div>
    )
};

export default InBasketIcon;