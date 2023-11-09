import React, { useEffect, useState } from "react";
import styles from '../styles/Checkout.module.css'

function InputWish({ index, setAsValidWish }) {

    const [userWish, setUserWish] = useState('');
    const [isValidWish, setIsValidWish] = useState(false);


    const verifyWish = () => {
        const lowercaseWish = userWish.toLocaleLowerCase();
        const words = lowercaseWish.split(' ');
        const containsWish = words.includes('wish');
        const hasXWords = words.length >= 4;
        setIsValidWish(containsWish && hasXWords);
    }

    const handleInputChange = (e) => {
        setUserWish(e.target.value);
        verifyWish();
    };

    
    useEffect(() => {
        if (isValidWish) {
            setAsValidWish(index, isValidWish); // Pass isValidWish to the parent component
        }
    }, [isValidWish]);



    return (
        <>
            <p className={styles.paymentHeader}>
                Wish {index + 1}
            </p>
            <div className={styles.inputANDvalidation}>
                <input
                    value={userWish}
                    type='text'
                    className={`${styles.wishPayment} ${styles.singleCurrencyPayment}`}
                    required
                    onChange={handleInputChange}
                />
                {isValidWish ? <div className={styles.tickBox}> ✓ </div> : <></>}
            </div>


        </>
    )
};

export default InputWish;



    // Ideally i would use a regular expression but I haven't figure it out yet

    // const verifyWishWithPattern = () => {
    //     const wishPattern = /^(\b\w+\b\s+)(wish\b\s+)(\b\w+\b\s+)(\b\w+\b\s+){3,}.$/i;
    //     setIsValidWish(wishPattern.test(userWish));
    // }
    // EXPLAIN REGEXP
    // enclosed in ('/') to create regex literal
    // ('i') at the end for case-insensitive match
    // (\b\w+\b\s+): Matches a word followed by one or more spaces. This part is repeated for the first and third words to ensure at least four words in total.
    // (wish\b\s+): Matches the word "wish" followed by one or more spaces. This enforces "wish" as the second word.
    // (\b\w+\b\s+){3,}: Matches three or more words followed by spaces, ensuring there are at least four words in total.
    // .*: Matches any remaining characters (zero or more) after the fourth word.
