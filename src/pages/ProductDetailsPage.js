
import React, { useEffect, useState } from 'react';
import jellyGemsObj from '../JellyGemsObjects';
import { useParams, Link } from 'react-router-dom';
import styles from '../styles/ProductDetailsPage.module.css';
import AddToBasket from '../components/AddToBasket';
import amb from '../images/artwork/Amber.jpg';
import ame from '../images/artwork/Amethyst.jpg';
import eme from '../images/artwork/Emerald.jpg';
import rub from '../images/artwork/Ruby.jpg';
import quart from '../images/artwork/Quartz.jpg';
import sapp from '../images/artwork/Sapphire.jpg';


function ProductDetailsPage() {
    const { stone } = useParams('stone');
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

    const stoneName = jellyGemsObj[stoneId]?.name;
    const stoneDescription = jellyGemsObj[stoneId]?.description;
    const stoneBrief = jellyGemsObj[stoneId]?.brief;
    const stoneKeyWords = jellyGemsObj[stoneId]?.keyWords;
    const stoneHeroImg = jellyGemsObj[stoneId]?.heroImg;
    const stonePairImg = jellyGemsObj[stoneId]?.pairImg;

    console.log(stoneName);

    const artworkImg = () => {
        switch (stoneName) {
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


    return (
        <>
            <main>

                <div>
                    <div className={styles.container}>
                        <div className={styles.heroImgContainer}>
                            <img src={artworkImg()} className={styles.heroImg} />
                        </div>

                        <div className={styles.infoContainer}>
                            <div className={styles.AddToBasketContainer}>
                                <AddToBasket name={stoneName} />
                            </div>

                            <div className={styles.info}>
                                <p>{stoneBrief}</p>
                                <p>{stoneDescription}</p>
                            </div>

                        </div>
                    </div>

                    <div className={styles.pairsWellWithContainer}>
                        <h2>Pairs well with : </h2>
                        <div className={styles.pairImgContainer}>
                            <img src={stonePairImg} className={styles.pairImg} />
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}

export default ProductDetailsPage;





