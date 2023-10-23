import React from "react";
import { Link } from "react-router-dom";


function Footer () {
    return (
        <>
            <Link to="products"> Products </Link>
            <Link to="basket"> Basket </Link>
            <Link to="about"> About </Link>
            <Link to="donate"> Donate </Link>
            <Link to="home"> Home </Link>
        </>
    )
}

export default Footer;