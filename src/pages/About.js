import React, {useState, useEffect, useRef} from 'react';
import BluePill from '../components/BluePill';
import RedPill from '../components/RedPill';
import styles from '../styles/About.module.css' 

// I need and onClick for the Pills. toggle between red and blue. default blue. 
// if click on click ion either then toggle to whichever one clicked . 
// if toggle on is true then 


function About() {

    const [pill, setPill] = useState('blue');

    const handleRealityShift = (selectedPill) => {
        setPill(selectedPill);
        switch (selectedPill) {
            case 'blue' :
                console.log('blue');
                break;
            case 'red' : 
                console.log('red');
                break;
            default: 
                console.log('sorry, no pill');

        }
    };

    console.log('pill', pill);

    useEffect( () => {
        const pillPageBlue = document.get
    }, [pill]);

    return (
        <div>
            <p className={styles.pickAPill}> pick a pill 😎 </p>

            <div className={styles.PillsPages} >
                { pill === 'blue' ? (
                        <>
                            <div 
                                className={styles.pillPageBlue} 
                                id='pillPageBlue'
                                style={{ zIndex: 1 }} 
                            >
                                <BluePill handleClick={() => handleRealityShift('blue')} />
                            </div>
                            <div className={styles.pillPageRed} id='pillPageRed' >
                                <RedPill handleClick={() => handleRealityShift('red')} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.pillPageBlue} id='pillPageBlue' >
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
    )
}

export default About