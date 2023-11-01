import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/InfoComponents.module.css';
import InfoIcon from './InfoIcon';



function HowToInfo() {

    const [howtoInfo, setHowToInfo] = useState(false);

    return (
        <div  >

            <div onClick={() => setHowToInfo(!howtoInfo)} className={styles.infoContainer} >
                <div className={styles.infoHeaders}>
                    <div>How to : </div>
                    <div className={styles.infoIconContainer}><InfoIcon /></div>
                </div>

                {howtoInfo ? (<div className={styles.info}>
                    <p>

                    Simply make your selection, proceed to the checkout, and
                        tell us your secret(s) and/or wish(es) and promise(s).<br/>
                        Upon your completing your purchase,
                        you shall receive your imaginary sweets instantaneously. <br/>
                        Know that your payments are safe, and not being remembered anywhere. <br/> <br/>

                    </p>
                </div>) : (<></>)}
            </div>

        </div>
    )
}

export default HowToInfo;