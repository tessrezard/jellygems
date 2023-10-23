import React from "react";
import { Link } from "react-router-dom";


function Header () {
    return (
        <>
            <Link to="home" className="title"> <h1>Jelly Gems</h1> </Link>
            <nav>
                <Link to="home"> Home </Link>
                <Link to="products"> Products </Link>
                <Link to="basket"> Basket </Link>
                <Link to="about"> About </Link>
            </nav>
        </>
    )
}

export default Header;