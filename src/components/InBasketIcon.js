import React, { useEffect, useState } from "react";
import styles from '../styles/InBasketIcon.module.css';
import { useMyContext } from '../MyContext';

function InBasketIcon () {
    const [total, setTotal] = useState(0);
    const { quantity } = useMyContext();
    // console.log('Quantity in InBasketIcon:', quantity);

// Use the updated context state (will reflect the changes made in the first component)



    return (
        <div className={styles.iconContainer}>
            <p className={styles.icon}>{quantity}</p>
        </div>
    )
};

export default InBasketIcon;