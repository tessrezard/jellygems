import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/InfoComponents.module.css';
import InfoIcon from './InfoIcon';



function ReturnsInfo( { returnsPolicy } ) {


    return (
        <div  >

            <div className={styles.infoContainer} >
                <div className={styles.infoHeaders}>
                <div>Returns Policy</div>
                    <div className={styles.infoIconContainer}><InfoIcon /></div>
                </div>
                {returnsPolicy ? (<div className={styles.info}>
                    <p>
                        Unfortunately we cannot process returns at this time.
                        If you are unsatisfied with your purchase we would encourage you to look within yourself,
                        to assess where such negatiity may stem from and perhaps work towards banishing
                        these thoughts and feelings with the help of your besteller: <br />
                        <Link
                            to={'/product-details-page/amethyst'}
                            className={styles.dropItem}
                        >Amethysts Jelly Gems
                        </Link> <br />
                        vegan gluten free gemstone-inspired imaginary sweets. <br />
                        Amethysts are thought to be a source of power and wisedom, and are attatched to serenity,
                        trust and grace. You may find these virtues helpful in this time of turnmoil,
                        and the Amethyst Jelly Gems have been said to help customers achieve up to 100%
                        more of these virtures (survey sample size: 1).
                    </p>
                </div>) : (<></>)}
            </div>
        </div>
    )
}

export default ReturnsInfo;