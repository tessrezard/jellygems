import React, { useState, useEffect, useRef } from 'react';
import BluePill from '../components/BluePill';
import RedPill from '../components/RedPill';
import styles from '../styles/About.module.css';
import InfoIcon from '../components/InfoIcon';

// I need and onClick for the Pills. toggle between red and blue. default blue. 
// if click on click ion either then toggle to whichever one clicked . 
// if toggle on is true then 


function About() {

    const [pill, setPill] = useState('blue');
    const [pillInfo, setPillInfo] = useState(false);

    const handleRealityShift = (selectedPill) => {
        setPill(selectedPill);
        switch (selectedPill) {
            case 'blue':
                console.log('blue');
                break;
            case 'red':
                console.log('red');
                break;
            default:
                console.log('sorry, no pill');

        }
    };

    console.log('pill', pill);



    return (
        <>
            <main>
            {/* <p className={styles.pickAPill}> pick a pill 😎 </p> */}
            <div className={styles.aboutPageContainer}>

                <div className={styles.pickAPill} onClick={() => setPillInfo(!pillInfo)} >
                    <InfoIcon onClick={() => {
                        setPillInfo(!pillInfo);
                        console.log('clicked infoicon')
                    }} />
                    {pillInfo ? (<>
                        <div className={styles.pickAPillHint}>
                            Pick a pill
                            <div className={` ${styles.littlePill} ${styles.littleBluePill} `}></div>
                            <div className={` ${styles.littlePill} ${styles.littleRedPill} `}></div>
                        </div>
                    </>) : (<></>)}
                </div>


                <div>

                    {pill === 'blue' ? (
                        <>
                            <div className={styles.pillPageBlue} style={{ zIndex: 1 }} >
                                <BluePill handleClick={() => handleRealityShift('blue')} />
                            </div>
                            <div className={styles.pillPageRed} >
                                <RedPill handleClick={() => handleRealityShift('red')} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.pillPageBlue} >
                                <BluePill handleClick={() => handleRealityShift('blue')} />
                            </div>

                            <div className={styles.pillPageRed} id='pillPageRed' >
                                <RedPill handleClick={() => handleRealityShift('red')} />
                            </div>

                        </>
                    )
                    }

                </div>
            </div>
            </main>
        </>
    )
}

export default About