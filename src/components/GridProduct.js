
import React, { useEffect, useState } from 'react';
import styles from '../styles/Products.module.css'

function GridProduct({name, description, brief, keyWords, heroImg, pairImg}) {

console.log(heroImg)
    return (
        <div className={styles.gridProductContainer}>

            <div className={styles.arch}>

                <div className={styles.imgAndTitle}>

                    <img src={heroImg} className={styles.heroImg} />
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>{name}</h1>
                    </div>

                </div>

            </div>
            

        </div>
    )
}

export default GridProduct;





