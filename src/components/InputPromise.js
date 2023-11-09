import React, { useState, useEffect } from "react";
import styles from '../styles/Checkout.module.css'

function InputPromise({ index, setAsValidPromise }) {

    const [userPromise, setUserPromise] = useState('');
    const [isValidPromise, setIsValidPromise] = useState(false);


    const verifyPromise = () => {
        const lowercasePromise = userPromise.toLocaleLowerCase();
        const words = lowercasePromise.split(' ');
        const containsPromise = words.includes('promise');
        const hasXWords = words.length >= 4;
        setIsValidPromise(containsPromise && hasXWords);
    }

    const handleInputChange = (e) => {
        setUserPromise(e.target.value);
        verifyPromise();
    };

    useEffect(() => {
        if (isValidPromise) {
            setAsValidPromise(index, isValidPromise); // Pass isValidSecret to the parent component
        }
    }, [isValidPromise]);


    return (
        <>
            <p className={styles.paymentHeader}>
                Promise {index + 1}
            </p>
            <div className={styles.inputANDvalidation}>
                <input
                    value={userPromise}
                    type='text'
                    className={`${styles.promisePayment} ${styles.singleCurrencyPayment}`}
                    required
                    onChange={handleInputChange}
                />
                {isValidPromise ? <div className={styles.tickBox}> ✓ </div> : <></>}
            </div>


        </>
    )
};

export default InputPromise;