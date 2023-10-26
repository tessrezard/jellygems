import React, {useEffect, useState} from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styles from '../styles/Header.module.css';
import DropdownMenu from "./DropdownMenu";


function Header () {
    const [path, setPath] = useState('/');
    const location = useLocation();

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <>
            <div className={styles.headerContainer}>
                <Link to="/home" className={styles.siteTitle} style={{textDecoration: 'none'}}>
                         Jelly Gems 
                </Link>

                <nav className={styles.navContainer}>
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
                        {isDropdownVisible && <DropdownMenu />}
                    </div>
                    <div>
                    <NavLink 
                        to="/basket"  
                        className={`${styles.navItem} ${location.pathname === '/basket' ? styles.activeNav : ''}`}
                        >
                             Basket 
                        </NavLink>
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


            </div>

        </>
    )
}

export default Header;