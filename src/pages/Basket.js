import React from 'react'
import { useMyContext } from '../MyContext';
import { Link } from "react-router-dom";
import styles from '../styles/Basket.module.css';

function Basket() {

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
            console.log(sortedCurrencies)
        }
        compareCurrencies()

    const handleReduce = (stoneQuant, setStoneQuant) => {
        console.log('stoneQuant', stoneQuant);
        if (stoneQuant > 0 ){
        const oneLess = stoneQuant - 1 ;
        setStoneQuant(oneLess);
        const newTotalQuant = quantity - 1 ;
        setQuantity(newTotalQuant);
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


            {/* <p>You have added {amberQuant} Amber</p>
            <p>You have added {amethystQuant} Amethysts</p>
            <p>You have added {emeraldQuant} Emeralds</p>
            <p>You have added {rubyQuant} Rubies</p>
            <p>You have added {sapphireQuant} Sapphires</p>
            <p>You have added {quartzQuant} Quartz</p> */}




{/* 
            <div className={styles.bothButtonsContainer}>
                <div  className={styles.buttonContainer}>
                    <div className={styles.button} >
                        <p className={styles.buttonText}> - </p>
                    </div>
                </div>

                <div  className={styles.buttonContainer}>
                    <div className={styles.button}>
                        <p className={styles.buttonText}> + </p>
                    </div>
                </div>
            </div> */}


            {/* <p>This will cost you {wishesTotal} Wishes, {promisesTotal} Promises, and {secretsTotal} Secrets</p> */}

            <h4>Total to pay:</h4> 
            <ul>
                {wishesTotal? <li>{wishesTotal} Wishes</li> : <></> }
                {promisesTotal? <li>{promisesTotal} Promises</li> : <></> }
                {secretsTotal? <li>{secretsTotal} Secrets</li> : <></> }
            </ul>

            <Link to="/checkout" style={{textDecoration: 'none'}}>
                         Proceed to Checkout 
                </Link>
        </div>
    )
}

export default Basket