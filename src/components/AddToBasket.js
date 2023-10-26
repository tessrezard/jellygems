import React, { useState } from "react";
import styles from '../styles/AddToBasket.module.css';
import { Link } from "react-router-dom";

const AddToBasket = ({ name }) => {

    const [currency, setCurrency] = useState('wish');
    const [quantity, setQuantity] = useState(1);

    function handleSettingCurrency(e) {
        e.preventDefault();
        const chosenCurrency = e.target.value;
        switch (chosenCurrency) {
            case 'wishes':
                setCurrency('wish');
                break;
            case 'secrets':
                setCurrency('secret');
                break;
            case 'promises':
                setCurrency('promise');
                break;
            default:
                setCurrency('wishe')
        }
    }

    function handleSettingQuantity(e) {
        e.preventDefault();
        const chosenQuantity = e.target.value;
        setQuantity(chosenQuantity);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit??');
        const addToBasket = {
            'quantity': quantity,
            'type': name,
            'currency': currency
        }

        // console.log(addToBasket);
        console.log(e);
        console.log();
        // window.localStorage.setItem('in Basket', addToBasket);

    }

    console.log(name);

    return (
        <div className={styles.container}>
            <h2>{name} Jelly Gems</h2>
            <div className={styles.priceContainer}>
                <div className={styles.priceHeader}>
                    Price :
                </div>
                <div className={styles.price}>
                    <p className={styles.currency}> 1 </p>
                    <p className={styles.currency}> {currency}✨ </p>
                    <p>(0.5714 {currency}/ 100g)</p>
                </div>


                <div>
                    <form role='shoppingChoices' className={styles.shoppingChoices} >
                        <label htmlFor="currencyChoice" className={styles.currencyLabel}>Select currency</label>
                        <select
                            name="currencyChoice"
                            id="currencyChoice"
                            className={styles.select}
                            onChange={handleSettingCurrency} >
                            <option value="wishes">wishes</option>
                            <option value="secrets">secrets</option>
                            <option value="promises">promises</option>
                        </select>
                        <label htmlFor="selectQuantity" className={styles.currencyLabel}>Select quantity: </label>
                        <input
                            type='number'
                            defaultValue='1'
                            min='1'
                            name="selectQuantity"
                            id="selectQuantity"
                            className={styles.inputQuantity}
                            onChange={handleSettingQuantity} />
                        {/* <input
                        type='submit'
                        name="submit"
                        id="submit"
                        value='submit'
                        className={styles.submitButton}
                        onChange={handleSubmit} /> */}
                    </form>

                    <div
                        className={styles.submitButton}
                        onClick={handleSubmit}>Add to Basket</div>
                </div>

            </div>
        </div>
    );
};

export default AddToBasket;