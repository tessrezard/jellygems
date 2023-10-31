import React from 'react';
import '../styles/roots.css';
import styles from '../styles/About.module.css';


function RedPill({ handleClick }) {


    return (
        <div>

            <div className={`${styles.PillContainer}`}>

                <div onClick={handleClick} className={`${styles.pill} ${styles.RedPillColor} ${styles.RedPillPosition}`}>
                </div>


                <div className={`${styles.insidePillContainer}  ${styles.RedPillColor}`}>
                    <h1>This is the RedPill component</h1>
                    <p>
                        Are you having fun?
                        I'm Tess, a front-end web developper.
                        This is a personal project I have been working on:
                        a real shop website that makes real transactions (with no money or goods involved) in a (hopefully) fun and transparent way.
                        The Jelly Gems artwork is all designed and created by me, the website also built by me,
                        using the react JavaScript library.
                        On a serious note:
                        To me, this is all tougue in cheek, cute and lighthearted.
                        I admit that i may be poking fun at the silly or weird (sometimes unwholesome) false promises that can on occasion be made in sales.
                        'This cream will make you look (up to) 10 years younger',
                        'this (unregulated) supplement with make you happy and healthy and kind' (both NOT REAL, made up quotes).
                        I'm accutely aware of my own past and present, and likely future suspetability to such marketing.
                        I mean no offence to the holistic health, gemstone or healthfood communities,
                        to the vegans or Ceoliacs or to the sweets and confectionary industry.
                        However, I understand that ultimately the intentions are less important than the impact.
                        If you have found this content to be troubling or if you feel hurt by the wording I have used or the inferences I may have made,
                        please do get in touch with me, I am open to conversation.
                    </p>
                </div>
                {/* <FeedbackForm/> */}
            </div>



        </div>
    )
}

export default RedPill