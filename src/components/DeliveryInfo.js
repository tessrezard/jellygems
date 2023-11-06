import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/InfoComponents.module.css';
import InfoIcon from './InfoIcon';



function DeliveryInfo( {deliveryInfo} ) {


    return (
        <>

            <div className={styles.infoContainer} >
                <div className={styles.infoHeaders}>
                    <div>Delivery Information</div>
                    <div className={styles.infoIconContainer}> <InfoIcon /> </div>
                </div>

                {deliveryInfo ? (<div className={styles.info}>
                    <p>
                        We pride ourselves on our instantaneous <strong> free delivery</strong>. <br />
                        Dispatch is immediate, though please note that speed of delivery may depend on the imagination of the customer. <br />
                        Unfortunately this is our of our control,
                        though we will endeavour to get your imaginary parcel to you as quickly as possible. <br />
                        If you are struggling with impatience or with feelings of insecurity about your ability to imagine the safe and speedy delivery of your items, might we suggest you try our wonderful  <br />
                        <Link
                            to={'/product-details-page/amber'}
                            className={styles.dropItem}
                        > Amber Jelly Gems:
                        </Link> <br />
                        vegan gluten free gemstone-inspired imaginary sweets. <br />
                        Symbol of courage, safe travels and adventures.
                        Amber has long been given to travelers to keep them safe on long journeys.
                    </p>
                </div>) : (<></>)}
            </div>

        </>
    )
}

export default DeliveryInfo;