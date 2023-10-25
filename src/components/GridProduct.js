
import React, { useEffect, useState } from 'react';
import styles from '../styles/Products.module.css'

function GridProduct({name, description, brief, keyWords, heroImg, pairImg}) {

    const sortedKeyWords = keyWords.sort((a, b) => a.length - b.length);
    console.log(sortedKeyWords);
    let shortestWords = sortedKeyWords.slice(0, 4);
    console.log(shortestWords);

    const [word1, word2, word3, word4] = shortestWords;
    
    const keyWordsSorted = keyWords.join('✦');

    console.log(keyWordsSorted);

    return (
        <>
            <div className={styles.gridProductContainer}>

                <div className={styles.keyWordContainer}>
                    <p className={styles.cornerLEFTStar}>✦</p>
                    <p className={styles.topLEFTStar}>✦</p>
                    <p className={` ${styles.keyWordsLeft} ${styles.keyWords} ${styles.topLEFTWord} `}>{word1}</p>
                    <p className={` ${styles.keyWordsLeft} ${styles.keyWords} ${styles.bottomLEFTWord} `}>{word4}</p>
                    <p className={styles.bottomStar}>✦</p>
                </div>

                <div className={styles.arch}>
                    <div className={styles.imgAndTitle}>
                        <img src={heroImg} className={styles.heroImg} />
                        <div className={styles.titleContainer}>
                            <h1 className={styles.title}>{name}</h1>
                        </div>
                    </div>
                </div>

                <div className={styles.keyWordContainer}>
                    <p className={styles.cornerRIGHTStar}>✦</p>
                    <p className={styles.topRIGHTStar}>✦</p>
                    <p className={ `${styles.keyWordsRight} ${styles.keyWords} ${styles.topRIGHTWord} `}>{word2}</p>
                    <p className={ `${styles.keyWordsRight} ${styles.keyWords} ${styles.bottomRIGHTWord} `}>{word3}</p>
                    <p className={styles.bottomStar}>✦</p>
                </div>





                </div>



        </>
        
        
    )
}

export default GridProduct;





