
import React, { useEffect, useState } from 'react';
import jellyGemsObj from '../JellyGemsObjects';
import { useParams, Link } from 'react-router-dom';
import styles from '../styles/ProductDetailsPage.module.css';

import pairimg from '../images/mockups/closeUp-pairImg-sapphire-quartz.jpg';
console.log(pairimg);



function ProductDetailsPage() {
    const {stone} = useParams('stone');
    let stoneId;
    const isThereASlash = () => {
        if (stone.substring(0) === '/') {
            stoneId = stone.substring(1).toLowerCase();
        }
         else if (stone.charAt(0) === ':') {
            stoneId = stone.substring(1).toLowerCase();
        } else {
            stoneId = stone.toLowerCase();
        }
        
    }
    isThereASlash();

    const  stoneName = jellyGemsObj[stoneId]?.name;
    const stoneDescription = jellyGemsObj[stoneId]?.description;
    const stoneBrief = jellyGemsObj[stoneId]?.brief;
    const stoneKeyWords = jellyGemsObj[stoneId]?.keyWords;
    const stoneHeroImg = jellyGemsObj[stoneId]?.heroImg;
    const stonePairImg = jellyGemsObj[stoneId]?.pairImg;

    console.log()

    return (
        <div className={styles.container}>
            <div className={styles.heroImgContainer}>
                <img src={stoneHeroImg} className={styles.heroImg} />
            </div>
            <div className={styles.infoContainer}>
                <h1>{stoneName}</h1>
                <p>{stoneBrief}</p>
                <p>{stoneDescription}</p>
                <p>{stoneKeyWords}</p>
            </div>
            <div>
                <img src={stonePairImg} className={styles.heroImg} />

            </div>
        </div>
    )
}

export default ProductDetailsPage;





