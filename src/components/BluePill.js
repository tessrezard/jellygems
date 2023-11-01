import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css';
import pillStyles from '../styles/pillStyles.module.css'
import DeliveryInfo from './DeliveryInfo';
import ReturnsInfo from './ReturnsInfo';
import CurrenciesInfo from './CurrenciesInfo';
import HowToInfo from './HowToInfo';


function BluePill({ handleClick }) {

    const [deliveryInfo, setDeliveryInfo] = useState(false);
    const [returnsPolicy, setReturnsPolicy] = useState(false);

    return (
        <div  >

            <div className={`${styles.PillContainer} `}>


                <div onClick={handleClick} className={`${styles.pill} ${styles.BluePillColor} ${styles.BluePillPosition}`}>
                </div>

                <div className={`${styles.insidePillContainer} ${styles.blueGradient} ${styles.BluePillColor}`}>
                    <h1>About Jelly Gems</h1>
                    <p className={`${pillStyles.text} `}>
                        Jelly Gems are imaginary sweets inspired by real gemstones and their imaginary properties. 
                        <br/><br/>
                        Founded in picturesque Oxford, our CEO set out to bring joy to the hearts of our customers.  
                        <br/>
                        Here are Jelly Gems,
                        we are transparent and open with our customers about what they will received for their hard earned spending power:
                        only the imaginary.
                    </p>
                    <HowToInfo />
                    <DeliveryInfo />
                    <ReturnsInfo />
                    <CurrenciesInfo />


                </div>
                {/* <FeedbackForm/> */}
            </div>


        </div>
    )
}

export default BluePill