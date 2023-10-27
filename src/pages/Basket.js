import React from 'react'
import { useMyContext } from '../MyContext';
import { Link } from "react-router-dom";

function Basket() {

    const { quantity, setQuantity, 
        emeraldQuant, setEmeraldQuant,
        rubyQuant, setRubyQuant,
        amberQuant, setAmberQuant,
        quartzQuant, setQuartzQuant,
        sapphireQuant, setSapphireQuant,
        amethystQuant, setAmethystQuant,
        wishesTotal, setWishesTotal,
        promisesTotal, setPromisesTotal,
        secretsTotal, setSecretsTotal
        } = useMyContext();


    return (
        <div>
            <h1>This is the Basket page</h1>
            <p>there are {quantity} items in your basket</p>
            <p>You have added {amberQuant} Amber</p>
            <p>You have added {amethystQuant} Amethysts</p>
            <p>You have added {emeraldQuant} Emeralds</p>
            <p>You have added {rubyQuant} Rubies</p>
            <p>You have added {sapphireQuant} Sapphires</p>
            <p>You have added {quartzQuant} Quartz</p>


            <p>This will cost you {wishesTotal} Wishes, {promisesTotal} Promises, and {secretsTotal} Secrets</p>
            <Link to="/checkout" style={{textDecoration: 'none'}}>
                         Proceed to Checkout 
                </Link>
        </div>
    )
}

export default Basket