import React from 'react';
import styles from '../styles/InfoComponents.module.css';
import InfoIcon from './InfoIcon';



function HowToInfo({ howtoInfo }) {


    return (
        <>

            <div className={styles.infoContainer} >
                <div className={styles.infoHeaders}>
                    <div>How to : </div>
                    <div className={styles.infoIconContainer}><InfoIcon /></div>
                </div>

                {howtoInfo ? (<div className={styles.info}>
                    <p>
                        Here at are Jelly Gems,
                        we are transparent and open with our customers about what they will received for their hard earned spending power:
                        only the imaginary. <br />
                        <br />
                        Simply make your selection, proceed to the checkout, and
                        tell us your secret(s) and/or wish(es) and promise(s).<br />
                        Upon your completing your purchase,
                        you shall receive your imaginary sweets instantaneously. <br />
                        Know that your payments are safe: <br />
                        <strong> Your wishes, secrets and promises are not being stored. </strong>
                    </p>
                </div>) : (<></>)}

            </div>

        </>
    )
}

export default HowToInfo;