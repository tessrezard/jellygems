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
    // const [currencyAdjustmentInfo, setCurrencyAdjustmentInfo] = useState(false);
    // //automatically close into window after 5 seconds
    // if (currencyAdjustmentInfo) {
    //     setTimeout(() => setCurrencyAdjustmentInfo(false), 5000)
    // }


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
        const topCurrency = Object.keys(sortedCurrencies[0])[0];
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
        const bottomCurrency = Object.keys(sortedCurrencies[2])[0];
        return bottomCurrency;
    }




    const handleReduce = (stoneQuant, setStoneQuant) => {
        if (stoneQuant > 0) {
            const oneLess = stoneQuant - 1;
            setStoneQuant(oneLess);
            const newTotalQuant = quantity - 1;
            setQuantity(newTotalQuant);
        }
        switch (getTopCurrency()) {
            case ('wishesTotal'):
                const newWishTotal = wishesTotal - 1;
                setWishesTotal(newWishTotal);
                break;
            case ('promisesTotal'):
                const newPromiseTotal = promisesTotal - 1;
                setPromisesTotal(newPromiseTotal);
                break;
            case ('secretsTotal'):
                const newSecretTotal = secretsTotal - 1;
                setSecretsTotal(newSecretTotal);
                break;
            default:
                break;
        }
    }

    const handleIncrease = (stoneQuant, setStoneQuant) => {
        if (stoneQuant > 0) {
            const oneMore = stoneQuant + 1;
            setStoneQuant(oneMore);
            const newTotalQuant = quantity + 1;
            setQuantity(newTotalQuant);
        }
        switch (getBottomCurrency()) {
            case ('wishesTotal'):
                const newWishTotal = wishesTotal + 1;
                setWishesTotal(newWishTotal);
                break;
            case ('promisesTotal'):
                const newPromiseTotal = promisesTotal + 1;
                setPromisesTotal(newPromiseTotal);
                break;
            case ('secretsTotal'):
                const newSecretTotal = secretsTotal + 1;
                setSecretsTotal(newSecretTotal);
                break;
            default:
                break;
        }
    }


    const handleRemove = (stoneQuant, setStoneQuant) => {
        const quantToReduce = stoneQuant;
        let newWishTotal = wishesTotal;
        let newPromiseTotal = promisesTotal;
        let newSecretTotal = secretsTotal;
        if (stoneQuant > 0) {
            const newTotalQuant = quantity - stoneQuant;
            setStoneQuant(0);
            setQuantity(newTotalQuant);
        }
        for (let x = quantToReduce; x > 0; x--) {
            switch (getTopCurrency()) {
                case 'wishesTotal':
                    if (newWishTotal > 0) {
                        newWishTotal -= 1;
                    } else if (newPromiseTotal > 0) {
                        newPromiseTotal -= 1;
                    } else if (newSecretTotal > 0) {
                        newSecretTotal -= 1;
                    }
                    break;
                case 'promisesTotal':
                    if (newPromiseTotal > 0) {
                        newPromiseTotal -= 1;
                    } else if (newWishTotal > 0) {
                        newWishTotal -= 1;
                    } else if (newSecretTotal > 0) {
                        newSecretTotal -= 1;
                    }
                    break;
                case 'secretsTotal':
                    if (newSecretTotal > 0) {
                        newSecretTotal -= 1;
                    } else if (newWishTotal > 0) {
                        newWishTotal -= 1;
                    } else if (newPromiseTotal > 0) {
                        newPromiseTotal -= 1;
                    }
                    break;
                default:
                    break;
            }
        }
        setWishesTotal(newWishTotal);
        setSecretsTotal(newSecretTotal);
        setPromisesTotal(newPromiseTotal);
    }



    return (
        <>
            <main>
                <div className={styles.basketPageContainer}>
                    {
                        quantity ? (
                            <>
                                <div className={styles.subtotalContainer}>
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
                                </div>

                                <div className={styles.basketContainer}>
                                    <h2>Your Basket : </h2>

                                    <p>Total items : {quantity}</p>
                                    <ul className={styles.listInBasket}>

                                        {/* I should definitely make the items in basket a component with props (too many props?). This is way to repetitive.
                                    make an array with only the stoneQuants that are true, map over and make item in basket component */}
                                        {amberQuant ? (

                                            <div className={styles.liContainer}>
                                                <div className={styles.stoneImgContainer}>
                                                    <Link to={`/product-details-page/amber`}>
                                                        <img src={amb} className={styles.stoneImg} alt={`Amber packaging artwork, it is in a soft yellow and amber color scheme.`} />
                                                    </Link>
                                                </div>
                                                <li className={styles.itemLi}>
                                                    <p className={styles.itemName} >Amber Jelly Gems </p>
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
                                                <div className={styles.removeItemContainer}>
                                                    <div className={styles.removeItem} onClick={() => handleRemove(amberQuant, setAmberQuant)}>
                                                        <p style={{ margin: 0, paddingBottom: 2 }}>x</p>
                                                    </div>
                                                </div>

                                            </div>
                                        ) : <></>}


                                        {amethystQuant ? (
                                            <div className={styles.liContainer}>
                                                <div className={styles.stoneImgContainer}>
                                                    <Link to={`/product-details-page/amethyst`}>
                                                        <img src={ame} className={styles.stoneImg} alt={`Amethysts packaging artwork, it is in a mauve and violet color scheme.`}/>
                                                    </Link>
                                                </div>
                                                <li className={styles.itemLi}>
                                                    <p className={styles.itemName} >Amethyst Jelly Gems </p>
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
                                                <div className={styles.removeItemContainer}>
                                                    <div className={styles.removeItem} onClick={() => handleRemove(amethystQuant, setAmethystQuant)}>
                                                        <p style={{ margin: 0, paddingBottom: 2 }}>x</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : <></>}


                                        {emeraldQuant ? (
                                            <div className={styles.liContainer}>
                                                <div className={styles.stoneImgContainer}>
                                                    <Link to={`/product-details-page/emerald`}>
                                                        <img src={eme} className={styles.stoneImg} alt={`Emeralds packaging artwork, it is in a seafoam and forest green color scheme.`}/>
                                                    </Link>
                                                </div>
                                                <li className={styles.itemLi}>
                                                    <p className={styles.itemName} >Emerald Jelly Gems </p>
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
                                                <div className={styles.removeItemContainer}>
                                                    <div className={styles.removeItem} onClick={() => handleRemove(emeraldQuant, setEmeraldQuant)}>
                                                        <p style={{ margin: 0, paddingBottom: 2 }}>x</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : <></>}


                                        {rubyQuant ? (
                                            <div className={styles.liContainer}>
                                                <div className={styles.stoneImgContainer}>
                                                    <Link to={`/product-details-page/ruby`}>
                                                        <img src={rub} className={styles.stoneImg} alt={`Rubies packaging artwork, it is in a peach and red color scheme.`}/>
                                                    </Link>

                                                </div>
                                                <li className={styles.itemLi}>
                                                    <p className={styles.itemName} >Ruby Jelly Gems </p>
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
                                                <div className={styles.removeItemContainer}>
                                                    <div className={styles.removeItem} onClick={() => handleRemove(rubyQuant, setRubyQuant)}>
                                                        <p style={{ margin: 0, paddingBottom: 2 }}>x</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : <></>}


                                        {sapphireQuant ? (
                                            <div className={styles.liContainer}>
                                                <div className={styles.stoneImgContainer}>
                                                    <Link to={`/product-details-page/sapphire`}>
                                                        <img src={sapp} className={styles.stoneImg} alt={`Sapphires packaging artwork, it is in a pale and Oxford blue color scheme.`}/>
                                                    </Link>

                                                </div>
                                                <li className={styles.itemLi}>
                                                    <p className={styles.itemName} >Sapphire Jelly Gems </p>
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
                                                <div className={styles.removeItemContainer}>
                                                    <div className={styles.removeItem} onClick={() => handleRemove(sapphireQuant, setSapphireQuant)}>
                                                        <p style={{ margin: 0, paddingBottom: 2 }}>x</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : <></>}


                                        {quartzQuant ? (
                                            <div className={styles.liContainer}>
                                                <div className={styles.stoneImgContainer}>
                                                    <Link to={`/product-details-page/quartz`}>
                                                        <img src={quart} className={styles.stoneImg} alt={`Rose Quartz packaging artwork, it is in a dusty pink color scheme.`} />
                                                    </Link>

                                                </div>
                                                <li className={styles.itemLi}>
                                                    <p className={styles.itemName} >Rose Quartz Jelly Gems </p>
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
                                                <div className={styles.removeItemContainer}>
                                                    <div className={styles.removeItem} onClick={() => handleRemove(quartzQuant, setQuartzQuant)}>
                                                        <p style={{ margin: 0, paddingBottom: 2 }}>x</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : <></>}
                                    </ul>
                                </div>


                            </>) : (<>
                                <div className={styles.bigMistakeContainer}>

                                    <p className={styles.bigMistake}>
                                        Your basket is empty! <br />
                                        Big Mistake! Big. Huge!
                                    </p>
                                    <Link to="/products" style={{ textDecoration: 'none' }} className={styles.goShoppingNow}>
                                        <p>I have to go shopping now.</p>
                                    </Link>
                                </div>

                            </>)
                    }

                </div>
            </main>
        </>
    )
}

export default Basket