import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/roots.css';
import styles from '../styles/About.module.css';
import InfoIcon from './InfoIcon';


function RedPill({ handleClick }) {
    const [contentNote, setContentNote] = useState(false);



    return (
        <>

            <div className={`${styles.PillContainer}`}>

                <div onClick={handleClick} className={`${styles.pill} ${styles.RedPillColor} ${styles.RedPillPosition}`}>
                </div>


                <div className={`${styles.insidePillContainer}  ${styles.redGradient}  ${styles.RedPillColor}`}>
                    <h1>The real 'About Jelly Gems'</h1>
                    <p>
                        Hi! I'm Tess, a front-end web developer. <br />
                        This is a personal project I have been working on.
                        I built this website in React and css.
                        I designed all The Jelly Gems artwork and graphics. The lead typeface is Luminari by Canada Type. <br />
                    </p>

                    <div onClick={() => setContentNote(!contentNote)} className={styles.contentInfoContainer} >
                        <div className={styles.contentInfoHeaders}>
                            <div>Content note </div>
                            <div className={styles.contentInfoIconContainer}><InfoIcon /></div>
                        </div>
                        {contentNote ? (<div className={styles.info}>
                            <p>
                                I am be poking fun at the false promises that are sometimes made in sales.
                                'This cream will make you look (up to) 10 years younger',
                                'this (unregulated) supplement with make you happy and healthy and kind'.
                                I'm acutely aware of my own susceptibility to such marketing.
                                I mean no offense to the holistic health, gemstone or health-food communities,
                                to the vegans, the coeliac or to the sweets and confectionary industry.
                                If you have found this content to be troubling,
                                please do get in touch with me, I am open to conversation.
                            </p>
                        </div>) : (<></>)}
                    </div>

                </div>
            </div>

        </>
    )
}

export default RedPill