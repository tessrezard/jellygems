import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css';
import pillStyles from '../styles/pillStyles.module.css'
import DeliveryInfo from './DeliveryInfo';
import ReturnsInfo from './ReturnsInfo';
import CurrenciesInfo from './CurrenciesInfo';
import HowToInfo from './HowToInfo';


function BluePill({ handleClick }) {

    const [howtoInfo, setHowToInfo] = useState(false);
    const [deliveryInfo, setDeliveryInfo] = useState(false);
    const [returnsPolicy, setReturnsPolicy] = useState(false);
    const [currencyInfo, setCurrencyInfo] = useState(false);

const handleSetDelivery = () => {
    setDeliveryInfo(!deliveryInfo);
    setReturnsPolicy(false);
    setCurrencyInfo(false);
    setHowToInfo(true)
}

    const onlyOpenOne = () => {
        if (howtoInfo) {
            if (deliveryInfo){
                setDeliveryInfo(false);
            }
            if (returnsPolicy){
                setReturnsPolicy(false);
            }
            if (currencyInfo){
                setCurrencyInfo(false);
            }
        }
        if (deliveryInfo) {
            if (howtoInfo){
                setHowToInfo(false);
            }
            if (returnsPolicy){
                setReturnsPolicy(false);
            }
            if (currencyInfo){
                setCurrencyInfo(false);
            }
        }
        if (deliveryInfo) {
            setHowToInfo(false);
            setReturnsPolicy(false);
            setCurrencyInfo(false);
        }
        if (currencyInfo) {
            setHowToInfo(false);
            setDeliveryInfo(false);
            setReturnsPolicy(false);
        }
        if (returnsPolicy) {
            setHowToInfo(false);
            setDeliveryInfo(false);
            setCurrencyInfo(false);
        }
    }

    useEffect(() => {
        onlyOpenOne();
    }, [howtoInfo, deliveryInfo, returnsPolicy, currencyInfo])

    return (
        <div  >

            <div className={`${styles.PillContainer} `}>


                <div onClick={handleClick} className={`${styles.pill} ${styles.BluePillColor} ${styles.BluePillPosition}`}>
                </div>

                <div className={`${styles.insidePillContainer} ${styles.blueGradient} ${styles.BluePillColor}`}>
                    <h1>About Jelly Gems</h1>
                    <p className={`${pillStyles.text} `}>
                        Jelly Gems are imaginary sweets inspired by real gemstones and their imaginary properties.
                        <br /><br />
                        Founded in picturesque Oxford, our CEO set out to bring joy to the hearts of our customers.
                        <br />
                        Here are Jelly Gems,
                        we are transparent and open with our customers about what they will received for their hard earned spending power:
                        only the imaginary.
                    </p>
                    <div onClick={() => {
                        setHowToInfo(!howtoInfo);

                        }} >
                        <HowToInfo howtoInfo={howtoInfo} />
                    </div>
                    <div onClick={() => setDeliveryInfo(!deliveryInfo)} >
                        <DeliveryInfo deliveryInfo={deliveryInfo} />
                    </div>
                    <div onClick={() => setReturnsPolicy(!returnsPolicy)} >
                        <ReturnsInfo returnsPolicy={returnsPolicy} />
                    </div>
                    <div onClick={() => setCurrencyInfo(!currencyInfo)} >
                        <CurrenciesInfo currencyInfo={currencyInfo} />
                    </div>


                </div>
                {/* <FeedbackForm/> */}
            </div>


        </div>
    )
}

export default BluePill