import React, { useState } from 'react'
import { useMyContext } from '../MyContext';
import InfoIcon from '../components/InfoIcon';
import styles from '../styles/Checkout.module.css'
function Checkout() {

    const [deliveryInfo, setDeliveryInfo] = useState(false);

    const { quantity, setQuantity,
        emeraldQuant, setEmeraldQuant,
        rubyQuant, setRubyQuant,
        amberQuant, setAmberQuant,
        quartzQuant, setQuartzQuant,
        sapphireQuant, setSapphireQuant,
        amethystQuant, setAmethystQuant,
        wishesTotal, setWishesTotal,
        promisesTotal, setPromisesTotal,
        secretsTotal, setSecretsTotal
    } = useMyContext();


    return (
        <>
            <h2>Checkout</h2>

            <div className={styles.CheckoutPageContainer}>

                <div>
                    <h3>Make payment</h3>
                    <form>
                        {wishesTotal ? (
                            <div >
                                {[...Array(wishesTotal)].map((_, index) => (
                                    <>
                                        <p className={styles.paymentHeader}>
                                            Wish {index + 1}
                                        </p>
                                        <input
                                            type='text'
                                            className={`${styles.wishPayment} ${styles.SingleCurrencyPayment}`}
                                            key={index}
                                            />
                                    </>
                                ))}
                            </div>
                        ) : <></>}

                        {promisesTotal ? (
                            <div >
                                {[...Array(promisesTotal)].map((_, index) => (
                                    <>
                                        <p className={styles.paymentHeader}>
                                            Promise {index + 1}
                                        </p>
                                        <input
                                            type='text'
                                            className={`${styles.promisePayment} ${styles.SingleCurrencyPayment}`}
                                            key={index} 
                                            />
                                    </>
                                ))}
                            </div>
                        ) : <></>}

                        {secretsTotal ? (
                            <div >
                                {[...Array(secretsTotal)].map((_, index) => (
                                    <>
                                    <p className={styles.paymentHeader}>
                                        Secret {index + 1}
                                    </p>
                                    <input
                                        type='text'
                                        className={`${styles.secretPayment} ${styles.SingleCurrencyPayment}`}
                                        key={index} />
                                </>
                                ))}
                            </div>
                        ) : <></>}

                    </form>
                </div>

                <div>
                    <p>Delivery: <strong>free delivery</strong></p>
                    <div onClick={() => setDeliveryInfo(!deliveryInfo)}>
                        <InfoIcon />
                        {deliveryInfo ? (<div className={styles.currencyAdjustmentInfo}>
                            <p>
                                We pride ourselves on our instantaneous <strong> free delivery</strong>. <br />
                                Dispatch is immidiate, though please note that speed of delivery may depend on the imagination of the customer. <br />
                                Unfortunatly this is our of our control,
                                though we will endevour to get your imaginary parcel to you as quickly as possible.
                            </p>
                        </div>) : (<></>)}
                    </div>

                    <h4>Subtotal for your {quantity} items:</h4>
                    <ul className={styles.pricesToPay}>
                        {wishesTotal ? <li> ✧ {wishesTotal} Wishes</li> : <></>}
                        {promisesTotal ? <li> ✧ {promisesTotal} Promises</li> : <></>}
                        {secretsTotal ? <li> ✧ {secretsTotal} Secrets</li> : <></>}
                    </ul>
                </div>

            </div>

        </>

    )
}

export default Checkout;