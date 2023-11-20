import React from "react";

import styles from '../styles/Burger.module.css';
import InBasketIcon from "./InBasketIcon";
import { useMyContext } from '../MyContext';

// BergMenu is the menu that appears when Berger is clicked on mobile screens
// Styled components for the button and animations

function Burger({active, setActive}) {

    const { quantity } = useMyContext();

    const handleClick = () => {
        setActive(prev => !prev);
    };
    console.log('active', active);


    return (
        <>
        <div style={{display: 'flex', flexFlow: 'row', alignItems: "center"}}>
            <div className={`${styles.burgerContainer} ${active ? styles.active : ''}`} onClick={handleClick}>
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
            </div>
            <div>
                {quantity ? <InBasketIcon /> : <></>}
            </div>
            </div>

        </>
    );
}
export default Burger;



