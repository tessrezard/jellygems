import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from '../styles/Footer.module.css';
import headerStyles from '../styles/Header.module.css';


function Footer() {

    const location = useLocation();
    const [returnsPolicy, setReturnsPolicy] = useState(false);

    return (
        <>
            <div className={styles.footerContainer}>
                <p>Returns Policy</p>
                <div onClick={() => setReturnsPolicy(!returnsPolicy)}>
                    {returnsPolicy ? (<div className={styles.returnsPolicy}>
                        <p>
                            Unfortunately we cannot process returns at this time.
                            If you are unsatisfied with your purchase we would encourage you to look within yourself,
                            to assess where such negatiity may stem from and perhaps work towards banishing
                            these thoughts and feelings with the help of your besteller: the Amethyst Jelly Gems :
                            vegan gluten free gemstone-inspired imaginary sweets.
                            <Link
                                to={'product-details-page/:Amethyst'}
                                className={styles.dropItem}
                            >Amethysts
                            </Link>
                            Amethysts are thought to be a source of power and wisedom, and are attatched to serenity,
                            trust and grace. You may find these virtues helpful in this time of turnmoil,
                            and the Amethyst Jelly Gems have been said to help customers achieve up to 100%
                            more of these virtures (survey sample size: 1).
                        </p>
                    </div>) : (<></>)}
                    <p>Returns Policy</p>

                </div>

                <Link
                    to="about"
                    className={`${headerStyles.navItem} ${location.pathname === '/about' ? headerStyles.activeNav : ''}`}
                > About
                </Link>
                <Link
                    to="donate"
                    className={`${headerStyles.navItem} ${location.pathname === '/donate' ? headerStyles.activeNav : ''}`}
                > Donate
                </Link>

            </div>



        </>
    )
}

export default Footer;