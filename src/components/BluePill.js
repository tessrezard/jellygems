import React from 'react';
import styles from '../styles/About.module.css';


function BluePill() {
    return (
        <div className={styles.BluePillContainer} >
            <h1>This is the BluePill component</h1>
            <p>
            Jelly Gems are imaginary sweets inspired by real gemstones and their imaginary properties.
            Founded in picturesque Oxford, our CEO set out to bring joy to the hearts of our customers. 
            Here are Jelly Gems, 
            we are transparent and open with our customers about what they will received for their hard earned spending power: 
            only the imaginary, ie nothing phyisical or tangible (or real?). 
            Simply make your selection, proceed to the checkout, 
            tell us your secret(s) or wish(es) of choice, 
            and make the payment. Upon your completing your purchase, 
            you shall receive your imaginary sweets instantaneously. 
            You will recieve an email confirming your transaction and order.
            Know that your secrets are safe, and not being held in any database. 
            The currecies we trade in are wishes and secrets. 
            Unfortunately we are unable to accept any other currecies at this time. 
            Know we are working towards brigning new currencies to our company, 
            those at the forfront of our priodity list are unbreakable promises and second to fifth-hand gossip. 
            Unfortunately the brexit red tape has been slowing this process. 
            </p>
        </div>
    )
}

export default BluePill