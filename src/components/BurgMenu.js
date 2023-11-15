import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useMyContext } from '../MyContext';
import InBasketIcon from "./InBasketIcon";
import DropdownMenu from "./DropdownMenu";

import styles from '../styles/BurgMenu.module.css';
import headerStyles from '../styles/Header.module.css';
// BergMenu is the menu that appears when Berger is clicked on mobile screens

function BergMenu({setActiveBurger}) {

    const location = useLocation();
    const { quantity } = useMyContext();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleNavLinkClick = () => {
        setActiveBurger(prev => !prev);
    };

    const handleProjsClick = () => {
        setDropdownVisible(prev => !prev);

    }


    console.log('isDropdownVisible', isDropdownVisible);


    return (
        <>
            {/* slide container */}
            <div className={styles.bergMenuContainer}>
                
            <nav className={headerStyles.navContainer}>
                        <div>
                            <NavLink
                                to="/home"
                                className={`${headerStyles.navItem} ${location.pathname === '/home' ? headerStyles.activeNav : ''}`}
                                onClick={handleNavLinkClick}
                            >
                                Home
                            </NavLink>
                        </div>

                        <div
                            >
                            <NavLink
                                to="/products"
                                className={`${headerStyles.navItem} ${location.pathname === '/products' ? headerStyles.activeNav : ''}`}
                                onClick={handleProjsClick}
                            >
                                Products
                            </NavLink>
                            {isDropdownVisible? (<div className={styles.dropdownMenuContainer}>
                            {isDropdownVisible && <DropdownMenu setActiveBurger={setActiveBurger} />}
                            </div>) : <></>}
                        </div>
                        <div>
                            <NavLink
                                to="/basket"
                                className={`${headerStyles.navItem} ${location.pathname === '/basket' ? headerStyles.activeNav : ''}`}
                                onClick={handleNavLinkClick}
                            >
                                Basket
                            </NavLink>
                            {quantity ? <InBasketIcon /> : <></>}
                        </div>

                        <div>
                            <NavLink
                                to="/about"
                                className={`${headerStyles.navItem} ${location.pathname === '/about' ? headerStyles.activeNav : ''}`}
                                onClick={handleNavLinkClick}
                            >
                                About
                            </NavLink>
                        </div>
                    </nav>
            </div>
        </>
    );
}
export default BergMenu;