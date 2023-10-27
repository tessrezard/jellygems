import React, { useState } from "react";
import styles from '../styles/AddToBasket.module.css';
import { Link } from "react-router-dom";
import PopUpAddedToBasket from "./PopUpAddedToBasket";
import { useMyContext } from '../MyContext';

const AddToBasket = ({ name }) => {


    const [currency, setCurrency] = useState('Wish');
    // const [quantity, setQuantity] = useState(1);
    const [justAdded, setJustAdded] = useState(false);

    const [chosenQuantity, setChosenQuanity] = useState(1);
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

    // console.log('Quantity in add to basket:', quantity);
    // console.log('typeof quantity',typeof quantity);


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
        setChosenQuanity(parseInt(e.target.value));
        // console.log('typeof chosenQuantity',typeof chosenQuantity);
    }

    function handleSubmit(e) {
        e.preventDefault();

        //add to total quantity count
        const newQuantity = quantity + chosenQuantity;
        setQuantity(newQuantity);

        //add to specific curreny count
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


        // if (window.localStorage.getItem('total-quantity')) {
        //     const currentTotal = window.localStorage.getItem('total-quantity');
        //     const newTotal = (parseInt(currentTotal) + parseInt(quantity));
        //     window.localStorage.setItem('total-quantity', newTotal);
        // } else {
        //     window.localStorage.setItem('total-quantity', quantity);
        // }
        // console.log('in local storage: ',  window.localStorage.getItem('total-quantity'));
        setJustAdded(true);
    }

    if (justAdded) {
        setTimeout(() => setJustAdded(false), 5000)
    }


    return (
        <div className={styles.container}>

            <h1>{name} Jelly Gems</h1>

            <div className={styles.priceContainer}>

                <div className={styles.priceHeader}>
                    <p>Price : </p>
                </div>
                <div className={styles.price}>
                    <p className={styles.currency}> 1 </p>
                    <p className={styles.currency}> {currency} ✨ </p>
                </div>
                <p className={styles.pricePerGram}>(0.5714 {currency}/ 100g)</p>

            </div>


            <div className={styles.formContainer}>
                <form role='shoppingChoices' className={styles.shoppingChoices} >
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
                {justAdded ? <PopUpAddedToBasket name={name} quantityAdded={chosenQuantity}/> : <></>}

            </div>

        </div>
    );
};

export default AddToBasket;