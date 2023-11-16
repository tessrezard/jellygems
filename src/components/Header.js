import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styles from '../styles/Header.module.css';
import DropdownMenu from "./DropdownMenu";
import InBasketIcon from "./InBasketIcon";
import { useMyContext } from '../MyContext';
import BergMenu from "./BurgMenu";
import Berger from "./Burger";


function Header() {
    const location = useLocation();
    const { quantity } = useMyContext();
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [activeBurger, setActiveBurger] = useState(false);

    // dropdown menu visible on click rather than on hover because shaking when hovering right on the edge. 
    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
            if (screenWidth > 450){
                setDropdownVisible(false);
            }
        };
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // empty dependency array so that the event listener is only added once, on mount

    return (
        <>
            <header>

                <div className={`${styles.headerContainer}  ${activeBurger && (screenWidth < 450)? styles.activeBurgerHeaderContainer : ''}`}>
                    <div className={styles.titleANDwideNav}>

                        <Link to="/home" className={styles.siteTitle} style={{ textDecoration: 'none' }}>
                            Jelly Gems
                        </Link>
                        {(screenWidth > 450) ? (
                            <>
                                <nav className={styles.wideNavContainer}>
                                    <div>
                                        <NavLink
                                            to="/home"
                                            className={`${styles.navItem} ${location.pathname === '/home' ? styles.activeNav : ''}`}
                                        >
                                            Home
                                        </NavLink>
                                    </div>
                                    <div
                                        onMouseDown={handleMouseEnter}
                                        onMouseUp={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}>
                                        <NavLink
                                            to="/products"
                                            className={`${styles.navItem} ${location.pathname === '/products' ? styles.activeNav : ''}`}
                                        >
                                            Products
                                        </NavLink>
                                        {isDropdownVisible && <DropdownMenu setActiveBurger={setActiveBurger}  />}
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/basket"
                                            className={`${styles.navItem} ${location.pathname === '/basket' ? styles.activeNav : ''}`}
                                        >
                                            Basket
                                        </NavLink>
                                        {quantity ? <InBasketIcon /> : <></>}
                                    </div>
                                    <div>
                                        <NavLink
                                            to="/about"
                                            className={`${styles.navItem} ${location.pathname === '/about' ? styles.activeNav : ''}`}
                                        >
                                            About
                                        </NavLink>
                                    </div>
                                </nav>
                            </>
                        ) : (
                            <></>)}

                    </div>
                    {(screenWidth < 450) ? (<>
                        <Berger active={activeBurger} setActive={setActiveBurger}/>
                    </>) : (<></>)}
                </div>

            </header>

            {activeBurger && (screenWidth < 450) ? (<>
                <BergMenu setActiveBurger={setActiveBurger} />
            </>) : (<></>)}

        </>
    )
}

export default Header;