import React, { useState, useEffect } from "react";
import styles from '../styles/Checkout.module.css'

function InputSecret({ index, setAsValidSecret }) {

    const [userSecret, setUserSecret] = useState('');
    const [isValidSecret, setValidSecret] = useState(false);


    const verifySecret = () => {
        const lowercasePromise = userSecret.toLocaleLowerCase();
        const words = lowercasePromise.split(' ');
        const containsSecret = words.includes('i');
        const hasXWords = words.length >= 3;
        setValidSecret(containsSecret && hasXWords);
    }

    const handleInputChange = (e) => {
        setUserSecret(e.target.value);
        verifySecret();
    };

    
    useEffect(() => {
        if (isValidSecret) {
            setAsValidSecret(index, isValidSecret); // Pass isValidSecret to the parent component
            console.log('in if in useEffect');
            console.log('index', index);
        }
    }, [isValidSecret]);


    return (
        <>
            <p className={styles.paymentHeader}>
                Secret {index + 1}
            </p>
            <div className={styles.inputANDvalidation}>
                <input
                    value={userSecret}
                    type='text'
                    className={`${styles.secretPayment} ${styles.singleCurrencyPayment}`}
                    required
                    onChange={handleInputChange}
                />
                {isValidSecret ? <div className={styles.tickBox}> ✓ </div> : <></>}
            </div>


        </>
    )
};

export default InputSecret;