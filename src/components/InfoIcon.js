import React from 'react'
import { useMyContext } from '../MyContext';
import styles from '../styles/InfoIcon.module.css'

function InfoIcon() {

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


    return (
        <div className={styles.infoIconContainer}>
            <p className={styles.infoIconI}>i</p>
        </div>
    )
}

export default InfoIcon;