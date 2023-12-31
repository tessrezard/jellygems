import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/InfoComponents.module.css';
import InfoIcon from './InfoIcon';



function CurrenciesInfo( { currencyInfo } ) {


    return (
        <>

            <div className={styles.infoContainer} >
                <div className={styles.infoHeaders}>
                    <div>Currencies</div>
                    <div className={styles.infoIconContainer}><InfoIcon /></div>
                </div>

                {currencyInfo ? (<div className={styles.info}>
                    <p>
                        The currencies we trade in are wishes, secrets and promises. <br />
                        Unfortunately we are unable to accept any other currencies at this time. <br />
                        We are working towards bringing new currencies to our company, including gossip and firstborns.
                        Sadly the brexit red tape has been slowing this process.<br />
                        If you are feeling frustration about the state of the world, might we suggest trying our classic: <br />
                        <Link
                            to={'/product-details-page/quartz'}
                            className={styles.dropItem}
                        > Rose Quartz Jelly Gems:
                        </Link> <br />
                        vegan gluten free gemstone-inspired imaginary sweets. <br />
                        Rose Quartz is the stone of unconditional love.
                        It is tied to emotional healing and is thought to inspire compassion.
                        You may find these virtues helpful in this time of turmoil.
                        Rose Quartz Jelly Gems have been said to help customers achieve up to 100%
                        more of these virtues (survey sample size: 1).
                    </p>
                </div>) : (<></>)}
            </div>

        </>
    )
}

export default CurrenciesInfo;