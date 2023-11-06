import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/About.module.css';
import pillStyles from '../styles/pillStyles.module.css'
import DeliveryInfo from './DeliveryInfo';
import ReturnsInfo from './ReturnsInfo';
import CurrenciesInfo from './CurrenciesInfo';
import HowToInfo from './HowToInfo';


function BluePill({ handleClick }) {


    const [activeTab, setActiveTab] = useState(null);

    const handleMoveInfoClick = (tab) => {
        setActiveTab(tab === activeTab ? null : tab);
    };




    return (
        <>
                <div className={`${styles.PillContainer} `}>

                    <div onClick={handleClick} className={`${styles.pill} ${styles.BluePillColor} ${styles.BluePillPosition}`}>
                    </div>

                    <div className={`${styles.insidePillContainer} ${styles.blueGradient} ${styles.BluePillColor}`}>
                        <h1>About Jelly Gems</h1>
                        <p className={`${pillStyles.text} `}>
                            Jelly Gems are imaginary sweets inspired by real gemstones and their imaginary properties.
                            <br /><br />
                            Founded in picturesque Oxford, our CEO set out to bring joy to the hearts of our customers.
                        </p>

                        <div onClick={() => handleMoveInfoClick('howto')}>
                            <HowToInfo howtoInfo={activeTab === 'howto'} />
                        </div>
                        <div onClick={() => handleMoveInfoClick('delivery')}>
                            <DeliveryInfo deliveryInfo={activeTab === 'delivery'} />
                        </div>
                        <div onClick={() => handleMoveInfoClick('returns')}>
                            <ReturnsInfo returnsPolicy={activeTab === 'returns'} />
                        </div>
                        <div onClick={() => handleMoveInfoClick('currency')}>
                            <CurrenciesInfo currencyInfo={activeTab === 'currency'} />
                        </div>

                    </div>
                    {/* <FeedbackForm/> */}
                </div>
        </>
    )
}

export default BluePill