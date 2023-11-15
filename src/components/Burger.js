import React from "react";

import styles from '../styles/Burger.module.css';

// BergMenu is the menu that appears when Berger is clicked on mobile screens
// Styled components for the button and animations

function Burger({active, setActive}) {


    const handleClick = () => {
        setActive(prev => !prev);
    };
    console.log('active', active);


    return (
        <>
            <div className={`${styles.burgerContainer} ${active ? styles.active : ''}`} onClick={handleClick}>
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
            </div>

        </>
    );
}
export default Burger;



