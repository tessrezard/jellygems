import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/roots.css';
import styles from '../styles/About.module.css';
import InfoIcon from './InfoIcon';


function RedPill({ handleClick }) {
    const [contentNote, setContentNote] = useState(false);



    return (
        <div>

            <div className={`${styles.PillContainer}`}>

                <div onClick={handleClick} className={`${styles.pill} ${styles.RedPillColor} ${styles.RedPillPosition}`}>
                </div>


                <div className={`${styles.insidePillContainer}  ${styles.redGradient}  ${styles.RedPillColor}`}>
                    <h1>The real 'About Jelly Gems'</h1>
                    <p>
                        Hi! I'm Tess, a front-end web developper. <br/>
                        This is a personal project I have been working on.
                        I built this website in React and css.
                        I designed all The Jelly Gems artwork and graphics. The lead typeface is Luminari by Canada Type. <br/>




            <div onClick={() => setContentNote(!contentNote)} className={styles.contentInfoContainer} >
                <div className={styles.contentInfoHeaders}>
                    <div>Content note </div>
                    <div className={styles.contentInfoIconContainer}><InfoIcon /></div>
                </div>

                {contentNote ? (<div className={styles.info}>
                    <p>
                    On a serious note:
                        To me, this is all tougue in cheek, cute and lighthearted.
                        I admit that i may be poking fun at the silly or weird (sometimes unwholesome) false promises that can on occasion be made in sales.
                        'This cream will make you look (up to) 10 years younger',
                        'this (unregulated) supplement with make you happy and healthy and kind'.
                        I'm accutely aware of my own past and present, and likely future suspetability to such marketing.
                        I mean no offence to the holistic health, gemstone or healthfood communities,
                        to the vegans or Ceoliacs or to the sweets and confectionary industry.
                        However, I understand that ultimately the intentions are less important than the impact.
                        If you have found this content to be troubling or if you feel hurt by the wording I have used or the inferences I may have made,
                        please do get in touch with me, I am open to conversation.
                    </p>
                </div>) : (<></>)}
            </div>


                        
                    </p>
                </div>
                {/* <FeedbackForm/> */}
            </div>



        </div>
    )
}

export default RedPill