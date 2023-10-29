import React, {useState} from 'react'
import { useMyContext } from '../MyContext';
import { Link } from "react-router-dom";
import styles from '../styles/Basket.module.css';
import InfoIcon from '../components/InfoIcon';

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

    const compareCurrencies = () => {
            const currencies = [
                {'wishesTotal': wishesTotal}, 
                {'promisesTotal': promisesTotal}, 
                {'secretsTotal': secretsTotal}
            ];
            const sortedCurrencies = currencies.sort((a, b) => {
                const aValue = Object.values(a)[0]; // extract value from the first object
                const bValue = Object.values(b)[0]; // extract value from the second object
                return bValue - aValue;
            });
            // console.log(sortedCurrencies)
            // console.log(Object.keys(sortedCurrencies[0])[0]);
            const topCurrency = Object.keys(sortedCurrencies[0])[0];
            console.log(typeof topCurrency);
            return topCurrency;
        }

    console.log(compareCurrencies());

    const handleReduce = (stoneQuant, setStoneQuant) => {
        console.log('stoneQuant', stoneQuant);
        if (stoneQuant > 0 ){
        const oneLess = stoneQuant - 1 ;
        setStoneQuant(oneLess);
        const newTotalQuant = quantity - 1 ;
        setQuantity(newTotalQuant);
        }
        console.log(compareCurrencies());
        switch (compareCurrencies()){
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

    return (
        <div>
            <h1>This is the Basket page</h1>
            <p>there are {quantity} items in your basket</p>
            <ul>



            {amberQuant? (
            <div className={styles.liContainer}>
                <li>You have added {amberQuant} Amber</li>
                <div className={styles.bothButtonsContainer}>
                    <div  className={styles.buttonContainer}>
                        <div className={styles.button} onClick={() => handleReduce(amberQuant, setAmberQuant)}>
                            <p className={styles.buttonText}> - </p>
                        </div>
                    </div>
                </div>
            </div>
            )  : <></> }

            {amethystQuant? (
            <div className={styles.liContainer}>
                <li>You have added {amethystQuant} Amethysts</li>
                <div className={styles.bothButtonsContainer}>
                    <div  className={styles.buttonContainer}>
                        <div className={styles.button} onClick={() => handleReduce(amethystQuant, setAmethystQuant)}>
                            <p className={styles.buttonText}> - </p>
                        </div>
                    </div>
                </div>
            </div>
            )  : <></> }

            {emeraldQuant? (
            <div className={styles.liContainer}>
                <li>You have added {emeraldQuant} Emeralds</li>
                <div className={styles.bothButtonsContainer}>
                    <div  className={styles.buttonContainer}>
                        <div className={styles.button} onClick={() => handleReduce(emeraldQuant, setEmeraldQuant)}>
                            <p className={styles.buttonText}> - </p>
                        </div>
                    </div>
                </div>
            </div>
            )  : <></> }


            {rubyQuant? (
            <>
                <li>You have added {rubyQuant} Rubies</li>
                <div className={styles.bothButtonsContainer}>
                    <div  className={styles.buttonContainer}>
                        <div className={styles.button} onClick={() => handleReduce(rubyQuant, setRubyQuant)}>
                            <p className={styles.buttonText}> - </p>
                        </div>
                    </div>
                </div> 
            </>
            )  : <></> }
            

            {sapphireQuant? (
            <>
                <li>You have added {sapphireQuant} Sapphires</li>
                <div className={styles.bothButtonsContainer}>
                    <div  className={styles.buttonContainer}>
                        <div className={styles.button} onClick={() => handleReduce(sapphireQuant, setSapphireQuant)}>
                            <p className={styles.buttonText}> - </p>
                        </div>
                    </div>
                </div> 
            </>
            )  : <></> }


            {quartzQuant? (
            <>
                <li>You have added {quartzQuant} Quartz</li>
                <div className={styles.bothButtonsContainer}>
                    <div  className={styles.buttonContainer}>
                        <div className={styles.button} onClick={() => handleReduce(quartzQuant, setQuartzQuant)}>
                            <p className={styles.buttonText}> - </p>
                        </div>
                    </div>
                </div> 
            </>
            )  : <></> }

            </ul>

            {quantity? (
            <>
            <div className={styles.totalToPayHeaderContainer}>
                <h4>Total to pay:</h4> 
            </div>

            <ul>
                {wishesTotal? <li>{wishesTotal} Wishes</li> : <></> }
                {promisesTotal? <li>{promisesTotal} Promises</li> : <></> }
                {secretsTotal? <li>{secretsTotal} Secrets</li> : <></> }
            </ul>

            <Link to="/checkout" style={{textDecoration: 'none'}}>
                         Proceed to Checkout 
                </Link>
            </> ) : (<></>)
            }
            
        </div>
    )
}

export default Basket