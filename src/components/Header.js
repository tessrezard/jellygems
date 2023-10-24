import React from "react";
import { NavLink, Link } from "react-router-dom";


function Header () {
    return (
        <>
            <Link to="home" className="title"> <h1>Jelly Gems</h1> </Link>
            <nav>
                <NavLink to="home"> Home </NavLink>
                <NavLink to="products"> Products </NavLink>
                <NavLink to="basket"> Basket </NavLink>
                <NavLink to="about"> About </NavLink>
            </nav>
        </>
    )
}

export default Header;