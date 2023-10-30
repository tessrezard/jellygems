import React, { useState } from 'react'
import { useMyContext } from '../MyContext';
import { Link } from "react-router-dom";
import styles from '../styles/Basket.module.css';
import InfoIcon from '../components/InfoIcon';
import amb from '../images/artwork/Amber.jpg';
import ame from '../images/artwork/Amethyst.jpg';
import eme from '../images/artwork/Emerald.jpg';
import rub from '../images/artwork/Ruby.jpg';
import quart from '../images/artwork/Quartz.jpg';
import sapp from '../images/artwork/Sapphire.jpg';

function Basket() {
    const [currencyAdjustmentInfo, setCurrencyAdjustmentInfo] = useState(false);
    //automatically close into window after 5 seconds
    if (currencyAdjustmentInfo) {
        setTimeout(() => setCurrencyAdjustmentInfo(false), 5000)
    }
    console.log(currencyAdjustmentInfo);


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


    const getTopCurrency = () => {
        const currencies = [
            { 'wishesTotal': wishesTotal },
            { 'promisesTotal': promisesTotal },
            { 'secretsTotal': secretsTotal }
        ];
        const sortedCurrencies = currencies.sort((a, b) => {
            const aValue = Object.values(a)[0];
            const bValue = Object.values(b)[0];
            return bValue - aValue;
        });
        // console.log(sortedCurrencies)
        // console.log(Object.keys(sortedCurrencies[0])[0]);
        const topCurrency = Object.keys(sortedCurrencies[0])[0];
        console.log(typeof topCurrency);
        return topCurrency;
    }


    const getBottomCurrency = () => {
        const currencies = [
            { 'wishesTotal': wishesTotal },
            { 'promisesTotal': promisesTotal },
            { 'secretsTotal': secretsTotal }
        ];
        const sortedCurrencies = currencies.sort((a, b) => {
            const aValue = Object.values(a)[0];
            const bValue = Object.values(b)[0];
            return bValue - aValue;
        });
        console.log('sortedCurrencies',sortedCurrencies);

        const bottomCurrency = Object.keys(sortedCurrencies[2])[0];
        console.log('typeof bottomCurrency',typeof bottomCurrency);
        return bottomCurrency;
    }


    console.log('getBottomCurrency', getBottomCurrency());


    const handleReduce = (stoneQuant, setStoneQuant) => {
        console.log('stoneQuant', stoneQuant);
        if (stoneQuant > 0) {
            const oneLess = stoneQuant - 1;
            setStoneQuant(oneLess);
            const newTotalQuant = quantity - 1;
            setQuantity(newTotalQuant);
        }
        console.log(getTopCurrency());
        switch (getTopCurrency()) {
            case ('wishesTotal'):
                const newWishTotal = wishesTotal - 1;
                console.log('newWishTotal', newWishTotal);
                setWishesTotal(newWishTotal);
                break;
            case ('promisesTotal'):
                const newPromiseTotal = promisesTotal - 1;
                console.log('newPromiseTotal', newPromiseTotal);
                setPromisesTotal(newPromiseTotal);
                break;
            case ('secretsTotal'):
                const newSecretTotal = secretsTotal - 1;
                console.log('newSecretTotal', newSecretTotal);
                setSecretsTotal(newSecretTotal);
                break;
            default:
                break;
        }
    }

    const handleIncrease = (stoneQuant, setStoneQuant) => {
        console.log('stoneQuant', stoneQuant);
        if (stoneQuant > 0) {
            const oneMore = stoneQuant + 1;
            setStoneQuant(oneMore);
            const newTotalQuant = quantity + 1;
            setQuantity(newTotalQuant);
        }
        console.log(getBottomCurrency());
        switch (getBottomCurrency()) {
            case ('wishesTotal'):
                const newWishTotal = wishesTotal + 1;
                console.log('newWishTotal', newWishTotal);
                setWishesTotal(newWishTotal);
                break;
            case ('promisesTotal'):
                const newPromiseTotal = promisesTotal + 1;
                console.log('newPromiseTotal', newPromiseTotal);
                setPromisesTotal(newPromiseTotal);
                break;
            case ('secretsTotal'):
                const newSecretTotal = secretsTotal + 1;
                console.log('newSecretTotal', newSecretTotal);
                setSecretsTotal(newSecretTotal);
                break;
            default:
                break;
        }
    }



    return (
        <div className={styles.basketPageContainer}>
            <div className={styles.basketContainer}>
                <h2>Your Basket : </h2>

                <p>Total items : {quantity}</p>
                <ul className={styles.listInBasket}>


                    {amberQuant ? (
                        <div className={styles.liContainer}>
                            <div className={styles.stoneImgContainer}>
                                <img src={amb} className={styles.stoneImg} />
                            </div>
                            <li className={styles.itemLi}>
                                <h1 className={styles.itemName} >Amber Jelly Gems </h1>
                                <p className={styles.quantHeader}>Quantity:</p>
                                <div className={styles.quantityContainer}>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleReduce(amberQuant, setAmberQuant)}>
                                                <p className={styles.buttonText}> - </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.quantity}> {amberQuant} </div>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleIncrease(amberQuant, setAmberQuant)}>
                                                <p className={styles.buttonText}> + </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ) : <></>}


                    {amethystQuant ? (
                        <div className={styles.liContainer}>
                            <div className={styles.stoneImgContainer}>
                                <img src={ame} className={styles.stoneImg} />
                            </div>
                            <li className={styles.itemLi}>
                                <h1 className={styles.itemName} >Amethyst Jelly Gems </h1>
                                <p className={styles.quantHeader}>Quantity:</p>
                                <div className={styles.quantityContainer}>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleReduce(amethystQuant, setAmethystQuant)}>
                                                <p className={styles.buttonText}> - </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.quantity}> {amethystQuant} </div>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleIncrease(amethystQuant, setAmethystQuant)}>
                                                <p className={styles.buttonText}> + </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ) : <></>}


                    {emeraldQuant ? (
                        <div className={styles.liContainer}>
                            <div className={styles.stoneImgContainer}>
                                <img src={eme} className={styles.stoneImg} />
                            </div>
                            <li className={styles.itemLi}>
                                <h1 className={styles.itemName} >Emerald Jelly Gems </h1>
                                <p className={styles.quantHeader}>Quantity:</p>
                                <div className={styles.quantityContainer}>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleReduce(emeraldQuant, setEmeraldQuant)}>
                                                <p className={styles.buttonText}> - </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.quantity}> {emeraldQuant} </div>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleIncrease(emeraldQuant, setEmeraldQuant)}>
                                                <p className={styles.buttonText}> + </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ) : <></>}


                    {rubyQuant ? (
                        <div className={styles.liContainer}>
                            <div className={styles.stoneImgContainer}>
                                <img src={rub} className={styles.stoneImg} />
                            </div>
                            <li className={styles.itemLi}>
                                <h1 className={styles.itemName} >Ruby Jelly Gems </h1>
                                <p className={styles.quantHeader}>Quantity:</p>
                                <div className={styles.quantityContainer}>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleReduce(rubyQuant, setRubyQuant)}>
                                                <p className={styles.buttonText}> - </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.quantity}> {rubyQuant} </div>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleIncrease(rubyQuant, setRubyQuant)}>
                                                <p className={styles.buttonText}> + </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ) : <></>}


                    {sapphireQuant ? (
                        <div className={styles.liContainer}>
                            <div className={styles.stoneImgContainer}>
                                <img src={sapp} className={styles.stoneImg} />
                            </div>
                            <li className={styles.itemLi}>
                                <h1 className={styles.itemName} >Sapphire Jelly Gems </h1>
                                <p className={styles.quantHeader}>Quantity:</p>
                                <div className={styles.quantityContainer}>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleReduce(sapphireQuant, setSapphireQuant)}>
                                                <p className={styles.buttonText}> - </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.quantity}> {sapphireQuant} </div>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleIncrease(sapphireQuant, setSapphireQuant)}>
                                                <p className={styles.buttonText}> + </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ) : <></>}


                    {quartzQuant ? (
                        <div className={styles.liContainer}>
                            <div className={styles.stoneImgContainer}>
                                <img src={quart} className={styles.stoneImg} />
                            </div>
                            <li className={styles.itemLi}>
                                <h1 className={styles.itemName} >Rose Quartz Jelly Gems </h1>
                                <p className={styles.quantHeader}>Quantity:</p>
                                <div className={styles.quantityContainer}>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleReduce(quartzQuant, setQuartzQuant)}>
                                                <p className={styles.buttonText}> - </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.quantity}> {quartzQuant} </div>
                                    <div className={styles.bothButtonsContainer}>
                                        <div className={styles.buttonContainer}>
                                            <div className={styles.button} onClick={() => handleIncrease(quartzQuant, setQuartzQuant)}>
                                                <p className={styles.buttonText}> + </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ) : <></>}


                </ul>
            </div>

            <div className={styles.subtotalContainer}>

                {quantity ? (
                    <>
                        <div className={styles.totalToPayHeaderContainer}>
                            <h2>Total to pay :</h2>
                        </div>

                        <ul className={styles.pricesToPay}>
                            {wishesTotal ? <li> ✧ {wishesTotal} Wishes</li> : <></>}
                            {promisesTotal ? <li> ✧ {promisesTotal} Promises</li> : <></>}
                            {secretsTotal ? <li> ✧ {secretsTotal} Secrets</li> : <></>}
                        </ul>

                        <Link to="/checkout" style={{ textDecoration: 'none' }} className={styles.proceedToCheckout}>
                            Proceed to Checkout
                        </Link>
                    </>) : (<></>)
                }
            </div>


        </div>
    )
}

export default Basket