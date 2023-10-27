import React, {useState} from "react";
import styles from '../styles/PopUpAddedToBasket.module.css';

function PopUpAddedToBasket ({type}) {

    const [isVisible, setIsVisible] = useState(true);

    function handleX () {
        setIsVisible(false);
    }

    const whatType = () => {
        switch (type) {
            case ('added to basket'):
                return;
        }
    }

    return (
        
        <div className={`${styles.wholePageContainer} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.popUpContainer}>
                <div className={styles.message}>
                    <p>Added to Basket!</p>
                </div>
                <div className={styles.xBox} onClick={handleX}>
                    <p  className={styles.x}>X</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
};

export default PopUpAddedToBasket;