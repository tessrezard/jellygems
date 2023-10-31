import React, { useState } from 'react'
import { useMyContext } from '../MyContext';
import InfoIcon from '../components/InfoIcon';
import styles from '../styles/Checkout.module.css'
import { Link } from "react-router-dom";


function Checkout() {

    const [deliveryInfo, setDeliveryInfo] = useState(false);
    const [paymentMade, setPaymentMade] = useState(false);
    const [returnsPolicy, setReturnsPolicy] = useState(false);

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

    const handleSubmitPayment = (event) => {
        event.preventDefault();
        setPaymentMade(true);
        console.log(paymentMade);

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
            {paymentMade ?
                (<div className={styles.confirmation}>
                    <h2> Order confirmation: </h2>
                    <h1>Thank you for shopping with Jelly Gems! </h1>

                    <div onClick={() => setDeliveryInfo(!deliveryInfo)} className={styles.infoContainer} >
                        <div>Delivery Information</div>
                        {deliveryInfo ? (<div className={styles.deliveryInfo}>
                            <p>
                                We pride ourselves on our instantaneous <strong> free delivery</strong>. <br />
                                Dispatch is immidiate, though please note that speed of delivery may depend on the imagination of the customer. <br />
                                Unfortunatly this is our of our control,
                                though we will endevour to get your imaginary parcel to you as quickly as possible. <br />
                                If you are stuggling with feeling of impatience, might we suggest you try our wonderful  <br />
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

                    <div onClick={() => setReturnsPolicy(!returnsPolicy)} className={styles.infoContainer} >
                        <div>Returns Policy</div>
                        {returnsPolicy ? (<div className={styles.returnsPolicy}>
                            <p>
                                Unfortunately we cannot process returns at this time.
                                If you are unsatisfied with your purchase we would encourage you to look within yourself,
                                to assess where such negatiity may stem from and perhaps work towards banishing
                                these thoughts and feelings with the help of your besteller: <br />
                                <Link
                                    to={'product-details-page/:Amethyst'}
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
                ) : (

                    <div className={styles.checkout}>

                        <h2>Checkout</h2>

                        <div className={styles.CheckoutPageContainer}>

                            <div>
                                <h3>Make payment</h3>
                                <form onSubmit={handleSubmitPayment}>
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
                                    <input type='submit' />
                                </form>
                            </div>

                            <div>
                                <p>Delivery: <strong>free delivery</strong></p>
                                <div onClick={() => setDeliveryInfo(!deliveryInfo)}  className={styles.infoContainer}>
                                    <p>delivery Information</p>
                                    <InfoIcon />
                                    {deliveryInfo ? (<div className={styles.deliveryInfo}>
                                        <p>
                                            We pride ourselves on our instantaneous <strong> free delivery</strong>. <br />
                                            Dispatch is immidiate, though please note that speed of delivery may depend on the imagination of the customer. <br />
                                            Unfortunatly this is our of our control,
                                            though we will endevour to get your imaginary parcel to you as quickly as possible. <br/>
                                            If you are stuggling with feelings of insecurity about your ability to imagine the safe and speedy delivery of your items, might we suggest you try our wonderful  <br />
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

                                <h4>Subtotal for your {quantity} items:</h4>
                                <ul className={styles.pricesToPay}>
                                    {wishesTotal ? <li> ✧ {wishesTotal} Wishes</li> : <></>}
                                    {promisesTotal ? <li> ✧ {promisesTotal} Promises</li> : <></>}
                                    {secretsTotal ? <li> ✧ {secretsTotal} Secrets</li> : <></>}
                                </ul>
                            </div>

                        </div>
                    </div>)}



        </>

    )
}

export default Checkout;