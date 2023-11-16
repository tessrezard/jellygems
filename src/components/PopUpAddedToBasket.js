import React, { useState } from "react";
import styles from '../styles/PopUpAddedToBasket.module.css';


function PopUpAddedToBasket({ name, quantityAdded, popUp, setPopUp, setJustAdded, justAdded }) {

    const [isVisible, setIsVisible] = useState(true);

    function handleX() {
        setIsVisible(false);
        if (popUp){
            setPopUp(false);
            setJustAdded(false);
        }
    }


    return (
        <>
            <div className={`${styles.wholePageContainer} ${isVisible ? styles.visible : styles.hidden}`}>
                
                <div className={styles.popUpContainer}>
                    <div className={styles.message}>
                        <p>{quantityAdded} {name} added to Basket!</p>
                    </div>
                    <div className={styles.xBox} onClick={handleX}>
                        <p className={styles.x}>X</p>
                    </div>
                </div>
            </div>
        </>
    )

};

export default PopUpAddedToBasket;