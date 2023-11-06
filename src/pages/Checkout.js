import React, { useState } from 'react'
import { useMyContext } from '../MyContext';
import InfoIcon from '../components/InfoIcon';
import styles from '../styles/Checkout.module.css'
import { Link } from "react-router-dom";
import DeliveryInfo from '../components/DeliveryInfo';
import ReturnsInfo from '../components/ReturnsInfo';


function Checkout() {

    const [paymentMade, setPaymentMade] = useState(false);

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

// state to measure if one of the info tabs has been clicked. 
    const [activeTab, setActiveTab] = useState(null);

    const handleMoveInfoClick = (tab) => {
        setActiveTab(tab === activeTab ? null : tab);
    };

    const handleSubmitPayment = (event) => {
        event.preventDefault();
        setPaymentMade(true);
        setQuantity(0);
        setEmeraldQuant(0);
        setRubyQuant(0);
        setAmberQuant(0);
        setQuartzQuant(0);
        setSapphireQuant(0);
        setAmethystQuant(0);
        setWishesTotal(0);
        setPromisesTotal(0);
        setSecretsTotal(0);
    }



    return (
        <>
            <main>
                {paymentMade ?
                    (<div className={styles.confirmation}>
                        <h2> Order confirmation: </h2>
                        <h1>Thank you for shopping with Jelly Gems! </h1>
                        <div onClick={() => handleMoveInfoClick('delivery')}>
                            <DeliveryInfo deliveryInfo={activeTab === 'delivery'} />
                        </div>
                        <div onClick={() => handleMoveInfoClick('returns')}>
                            <ReturnsInfo returnsPolicy={activeTab === 'returns'} />
                        </div>


                    </div>
                    ) : (

                        <>

                            <h2>Checkout</h2>

                            <div className={styles.checkoutContainer}>

                                <h3>Make payment</h3>


                                <form onSubmit={handleSubmitPayment}>
                                    <div className={styles.checkoutLayout}>

                                        <div className={styles.inputsContainer}>

                                            {wishesTotal ? (
                                                <div >
                                                    {[...Array(wishesTotal)].map((_, index) => (
                                                        <>
                                                            <p className={styles.paymentHeader}>
                                                                Wish {index + 1}
                                                                {/* <div className={styles.tickBox}> ✓ </div> */}
                                                            </p>
                                                            <input
                                                                type='text'
                                                                className={`${styles.wishPayment} ${styles.singleCurrencyPayment}`}
                                                                key={index}
                                                                required
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
                                                                className={`${styles.promisePayment} ${styles.singleCurrencyPayment}`}
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
                                                                className={`${styles.secretPayment} ${styles.singleCurrencyPayment}`}
                                                                key={index} />
                                                        </>
                                                    ))}
                                                </div>
                                            ) : <></>}

                                        </div>

                                        <div className={styles.submitContainer} >
                                            <div className={styles.toPay}>
                                                <h4 className={styles.toPayHeader}>Subtotal for your {quantity} items:</h4>
                                                <ul className={styles.pricesToPay}>
                                                    {wishesTotal ? <li> ✧ {wishesTotal} Wishes</li> : <></>}
                                                    {promisesTotal ? <li> ✧ {promisesTotal} Promises</li> : <></>}
                                                    {secretsTotal ? <li> ✧ {secretsTotal} Secrets</li> : <></>}
                                                </ul>
                                            </div>
                                            <input type='submit' className={styles.formSubmitButton} value='Process Payment' />
                                        </div>

                                    </div>
                                </form>

                                {/* <div className={styles.tickBox} >✓</div> */}

                            </div>
                        </>)}

            </main>
        </>

    )
}

export default Checkout;