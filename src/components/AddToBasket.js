import React, { useState, useEffect, useRef } from "react";
import styles from '../styles/AddToBasket.module.css';
import PopUpAddedToBasket from "./PopUpAddedToBasket";
import { useMyContext } from '../MyContext';
import InfoIcon from "./InfoIcon";

const AddToBasket = ({ name }) => {


    const [currency, setCurrency] = useState('Wish');
    const [justAdded, setJustAdded] = useState(false);
    const [currencyInfo, setCurrencyInfo] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const timeoutIDRef = useRef(null);

    // //automatically close pop-up window after 5 seconds
    // if (popUp) {
    //     if (justAdded) {
    //         setTimeoutID(setTimeout(() => {
    //             setJustAdded(false);
    //             if (popUp) {
    //                 setPopUp(false);
    //             }
    //         }, 2000))
    //     } else {
    //         setJustAdded(false);
    //     }
    // } 

    useEffect(() => {

        if (popUp) {
          // Set a timeout for 2 seconds
          timeoutIDRef.current = setTimeout(() => {
            setPopUp(false);
            setJustAdded(false);
          }, 2000);
        }
    
        // Clean up the timeout on component unmount or when popUp changes
        return () => clearTimeout(timeoutIDRef.current);
      }, [popUp]);
    


    const [chosenQuantity, setChosenQuantity] = useState(1);
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



    function handleSettingCurrency(e) {
        e.preventDefault();
        const chosenCurrency = e.target.value;
        switch (chosenCurrency) {
            case 'Wishes':
                setCurrency('Wish');
                break;
            case 'Secrets':
                setCurrency('Secret');
                break;
            case 'Promises':
                setCurrency('Promise');
                break;
            default:
                setCurrency('Wish')
        }
    }

    function handleSettingQuantity(e) {
        e.preventDefault();
        setChosenQuantity(parseInt(e.target.value));
        // console.log('typeof chosenQuantity',typeof chosenQuantity);
    }

    function handleSubmit(e) {
        clearTimeout(timeoutIDRef.current);

        e.preventDefault();
        //add to total quantity count
        const newQuantity = quantity + chosenQuantity;
        setQuantity(newQuantity);
        //add to specific currency count
        switch (currency) {
            case ('Wish'):
                const newWishes = wishesTotal + chosenQuantity;
                setWishesTotal(newWishes);
                break;
            case ('Promise'):
                const newPromises = promisesTotal + chosenQuantity;
                setPromisesTotal(newPromises);
                break;
            case ('Secret'):
                const newSecrets = secretsTotal + chosenQuantity;
                setSecretsTotal(newSecrets);
                break;
        };
        //add quantity so specific stone count
        switch (name) {
            case ('Emeralds'):
                const newEmQuant = emeraldQuant + chosenQuantity;
                setEmeraldQuant(newEmQuant);
                break;
            case ('Amethysts'):
                const newAmeQuant = amethystQuant + chosenQuantity;
                setAmethystQuant(newAmeQuant);
                break;
            case ('Amber'):
                const newAmbQuant = amberQuant + chosenQuantity;
                setAmberQuant(newAmbQuant);
                break;
            case ('Rubies'):
                const newRubQuant = rubyQuant + chosenQuantity;
                setRubyQuant(newRubQuant);
                break;
            case ('Rose Quartz'):
                const newQuarQuant = quartzQuant + chosenQuantity;
                setQuartzQuant(newQuarQuant);
                break;
            case ('Sapphires'):
                const newSapQuant = sapphireQuant + chosenQuantity;
                setSapphireQuant(newSapQuant);
                break;
        };
        // Just added triggers to pop up window - confirmation
        setPopUp(true);
        setJustAdded(true);
    }

    // prevent reload when you hit 'enter' when choosing quantity
    const handleFormSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className={styles.container}>

                <h1>{name} Jelly Gems</h1>

                <div className={styles.priceContainer}>

                    <div className={styles.priceHeader}>
                        <p>Price per Item : </p>
                    </div>
                    <div className={styles.price}>
                        <p className={`${styles.currency} ${styles.priceNumber}`}> 1 </p>
                        <p className={styles.currency}> {currency} ✨ </p>
                    </div>
                    <p className={styles.pricePerGram}>(0.5714 {currency}/ 100g)</p>

                </div>


                <div className={styles.formContainer}>
                    <form role='shoppingChoices' className={styles.shoppingChoices} onSubmit={handleFormSubmit}>
                        <label htmlFor="currencyChoice" className={styles.formLabel}>Currency:</label>
                        <select
                            name="currencyChoice"
                            id="currencyChoice"
                            className={styles.select}
                            onChange={handleSettingCurrency} >
                            <option value="Wishes">Wishes</option>
                            <option value="Secrets">Secrets</option>
                            <option value="Promises">Promises</option>
                        </select>
                        <div onClick={() => setCurrencyInfo(!currencyInfo)}>
                            <InfoIcon />
                            {currencyInfo ? (<div className={styles.currencyAdjustmentInfo}>
                                Currencies:
                                The currencies we trade in are wishes, secrets and promises.
                                Unfortunately we are unable to accept any other currencies at this time.
                                Know we are working towards bringing new currencies to our company,
                                including gossip and firstborns. Sadly the brexit red tape has been slowing this process.
                            </div>) : (<></>)}
                        </div>
                        <label htmlFor="selectQuantity" className={styles.formLabel}>Quantity: </label>
                        <input
                            type='number'
                            defaultValue='1'
                            min='1'
                            max='10'
                            name="selectQuantity"
                            id="selectQuantity"
                            className={styles.inputQuantity}
                            onChange={handleSettingQuantity} />
                    </form>
                    <div
                        className={styles.submitButton}
                        onClick={handleSubmit}>
                        <p className={styles.submitText}>
                            Add to Basket
                        </p>
                    </div>
                    {justAdded && popUp ? 
                    <PopUpAddedToBasket 
                        name={name} 
                        quantityAdded={chosenQuantity} 
                        popUp={popUp} setPopUp={setPopUp} 
                        setJustAdded={setJustAdded}
                        justAdded={justAdded}
                        /> : <></>}

                </div>

            </div>
        </>
    );
};

export default AddToBasket;