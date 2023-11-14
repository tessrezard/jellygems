import React, { useEffect, useState } from 'react'
import { useMyContext } from '../MyContext';
import InfoIcon from '../components/InfoIcon';
import styles from '../styles/Checkout.module.css'
import { Link } from "react-router-dom";
import DeliveryInfo from '../components/DeliveryInfo';
import ReturnsInfo from '../components/ReturnsInfo';
import InputWish from '../components/InputWish';
import InputPromise from '../components/InputPromise';
import InputSecret from '../components/InputSecret';

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

    const [validWishes, setValidWishes] = useState(Array(wishesTotal).fill(false));
    const [validPromises, setValidPromises] = useState(Array(promisesTotal).fill(false));
    const [validSecrets, setValidSecrets] = useState(Array(secretsTotal).fill(false));

    // state to measure if one of the info tabs has been clicked. 
    const [activeTab, setActiveTab] = useState(null);

    const handleMoveInfoClick = (tab) => {
        setActiveTab(tab === activeTab ? null : tab);
    };

    const setAsValidWish = (index, isValid) => {
        const updatedValidWishes = [...validWishes];
        updatedValidWishes[index] = isValid;
        setValidWishes(updatedValidWishes);
    };

    const setAsValidPromise = (index, isValid) => {
        const updatedValidPromises = [...validPromises];
        updatedValidPromises[index] = isValid;
        setValidPromises(updatedValidPromises);
    };

    const setAsValidSecret = (index, isValid) => {
        const updatedValidSecrets = [...validSecrets];
        updatedValidSecrets[index] = isValid;
        setValidSecrets(updatedValidSecrets);
    };


    const allInputsValid = () => {
        return validWishes.every((isValid) => isValid) &&
            validPromises.every((isValid) => isValid) &&
            validSecrets.every((isValid) => isValid);
    };


    const handleSubmitPayment = (event) => {
        event.preventDefault();

        if (allInputsValid()) {
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
        } else {
            alert('Please fill out all the inputs correctly.');
        }
    }

    return (
        <>
            <main>
                <div className={styles.pageContainer}>

                    {!paymentMade ? (<p className={styles.title}>Checkout</p>) : <></>}

                    {paymentMade ?
                        (<div className={styles.confirmation}>
                            <p className={styles.title}> Order confirmation: </p>
                            <p>Thank you for shopping with Jelly Gems! </p>
                            <div onClick={() => handleMoveInfoClick('delivery')}>
                                <DeliveryInfo deliveryInfo={activeTab === 'delivery'} />
                            </div>
                            <div onClick={() => handleMoveInfoClick('returns')}>
                                <ReturnsInfo returnsPolicy={activeTab === 'returns'} />
                            </div>
                        </div>
                        ) : (
                            <>
                                <div className={styles.checkoutContainer}>
                                    <p className={styles.makePaymentHeader}>Make payment</p>
                                    <form onSubmit={handleSubmitPayment}>
                                        <div className={styles.checkoutLayout}>
                                            <div >
                                                <ul className={styles.inputsContainer}>
                                                    {wishesTotal ? (
                                                        <div >
                                                            {[...Array(wishesTotal)].map((_, index) => (
                                                                <li key={index}>
                                                                    <InputWish index={index} setAsValidWish={setAsValidWish} />
                                                                </li>
                                                            ))}
                                                        </div>
                                                    ) : <></>}
                                                    {promisesTotal ? (
                                                        <div >
                                                            {[...Array(promisesTotal)].map((_, index) => (
                                                                <li key={index}>
                                                                    <InputPromise index={index} setAsValidPromise={setAsValidPromise} />
                                                                </li>
                                                            ))}
                                                        </div>
                                                    ) : <></>}
                                                    {secretsTotal ? (
                                                        <div >
                                                            {[...Array(secretsTotal)].map((_, index) => (
                                                                <li key={index}>
                                                                    <InputSecret index={index} setAsValidSecret={setAsValidSecret} />
                                                                </li>
                                                            ))}
                                                        </div>
                                                    ) : <></>}
                                                </ul>
                                            </div>

                                            <div className={styles.submitContainer} >
                                                <div className={styles.toPay}>
                                                    <p className={styles.toPayHeader}>Subtotal for your {quantity} item(s):</p>
                                                    <ul className={styles.pricesToPay}>
                                                        {wishesTotal ? <li> ✧ {wishesTotal} Wishes</li> : <></>}
                                                        {promisesTotal ? <li> ✧ {promisesTotal} Promises</li> : <></>}
                                                        {secretsTotal ? <li> ✧ {secretsTotal} Secrets</li> : <></>}
                                                    </ul>
                                                </div>
                                                <input
                                                    type='submit'
                                                    className={styles.formSubmitButton}
                                                    value='Process Payment'
                                                />
                                            </div>

                                        </div>
                                    </form>


                                </div>
                            </>)}
                </div>

            </main>
        </>

    )
}

export default Checkout;