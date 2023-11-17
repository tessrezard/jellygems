
import React from 'react';
import styles from '../styles/Products.module.css'
import amb from '../images/artwork/Amber.jpg';
import ame from '../images/artwork/Amethyst.jpg';
import eme from '../images/artwork/Emerald.jpg';
import rub from '../images/artwork/Ruby.jpg';
import quart from '../images/artwork/Quartz.jpg';
import sapp from '../images/artwork/Sapphire.jpg';



function GridProduct({ name, keyWords, brief }) {


    const sortedKeyWords = keyWords.sort((a, b) => a.length - b.length);
    let shortestWords = sortedKeyWords.slice(0, 4);
    const [word1, word2, word3, word4] = shortestWords;
    // console.log(name);
    const artworkImg = () => {
        switch (name) {
            case ('Amber'):
                return amb;
            case ('Amethysts'):
                return ame;
            case ('Emeralds'):
                return eme;
            case ('Rubies'):
                return rub;
            case ('Sapphires'):
                return sapp;
            case ('Rose Quartz'):
                return quart;
        }
    }

    console.log('brief', brief.length);
    const archBrief = brief.replace('.', '').slice(10);
    console.log(archBrief);


    return (
        <>
            <div className={styles.gridProductContainer}>

                <div className={styles.keyWordContainer}>
                    {/* the star icons should maybe all be in <span>s?  <p>s made easier to position  */}
                    <p className={styles.cornerLEFTStar}>✦</p>
                    <p className={styles.topLEFTStar}>✦</p>
                    <p className={` ${styles.keyWordsLeft} ${styles.keyWords} ${styles.topLEFTWord} `}>{word1}</p>
                    <p className={` ${styles.keyWordsLeft} ${styles.keyWords} ${styles.bottomLEFTWord} `}>{word4}</p>
                    <span className={styles.bottomStar}>✦</span>
                </div>

                <div className={styles.arch}>
                    <svg viewBox="0 0 500 180">
                        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                        <text width="500">
                            
                            <textPath xlinkHref="#curve">
                            ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦
                            </textPath>
                        </text>
                    </svg>
                    <div className={styles.imgAndTitle}>
                        <img src={artworkImg()} className={styles.heroImg} alt={`Lead artwork for ${name}`} />
                        <div className={styles.titleContainer}>
                            <p className={styles.title}>{name}</p>
                        </div>
                    </div>
                </div>
                
                <div className={styles.keyWordContainer}>
                    <p className={styles.cornerRIGHTStar}>✦</p>
                    <p className={styles.topRIGHTStar}>✦</p>
                    <p className={`${styles.keyWordsRight} ${styles.keyWords} ${styles.topRIGHTWord} `}>{word2}</p>
                    <p className={`${styles.keyWordsRight} ${styles.keyWords} ${styles.bottomRIGHTWord} `}>{word3}</p>
                    <span className={styles.bottomStar}>✦</span>
                </div>

            </div>
        </>
    )
}

export default GridProduct;





