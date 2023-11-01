import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/InfoComponents.module.css';
import InfoIcon from './InfoIcon';



function DeliveryInfo() {

    const [deliveryInfo, setDeliveryInfo] = useState(false);

    return (
        <div  >

            <div onClick={() => setDeliveryInfo(!deliveryInfo)} className={styles.infoContainer} >
                <div className={styles.infoHeaders}>
                    <div>Delivery Information</div>
                    <div className={styles.infoIconContainer}><InfoIcon /></div>
                </div>

                {deliveryInfo ? (<div className={styles.info}>
                    <p>
                        We pride ourselves on our instantaneous <strong> free delivery</strong>. <br />
                        Dispatch is immidiate, though please note that speed of delivery may depend on the imagination of the customer. <br />
                        Unfortunatly this is our of our control,
                        though we will endevour to get your imaginary parcel to you as quickly as possible. <br />
                        If you are stuggling with impatience or with feelings of insecurity about your ability to imagine the safe and speedy delivery of your items, might we suggest you try our wonderful  <br />
                        <Link
                            to={'product-details-page/:Amber'}
                            className={styles.dropItem}
                        > Amber Jelly Gems:
                        </Link> <br />
                        vegan gluten free gemstone-inspired imaginary sweets. <br />
                        Symbol of courgage, safe travels and adventures.
                        Amber has long been given to travellers to keep them safe on long journeys.
                        You may find these virtues helpful in this time of turnmoil,
                        and the Amber Jelly Gems have been said to help customers achieve up to 100%
                        more of these virtures (survey sample size: 1).
                    </p>
                </div>) : (<></>)}
            </div>

        </div>
    )
}

export default DeliveryInfo;