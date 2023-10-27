import React from 'react'
import { useMyContext } from '../MyContext';

function Checkout() {

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
            <p>In the checkout!</p>
            {/* <h1>This is the Basket page</h1>
            <p>there are {quantity} items in your basket</p>
            <p>You have added {amberQuant} Amber</p>
            <p>You have added {amethystQuant} Amethysts</p>
            <p>You have added {emeraldQuant} Emeralds</p>
            <p>You have added {rubyQuant} Rubies</p>
            <p>You have added {sapphireQuant} Sapphires</p>
            <p>You have added {quartzQuant} Quartz</p>*/}


            <h4>Subtotal:</h4> 
            <ul>
                {wishesTotal? <li>{wishesTotal} Wishes</li> : <></> }
                {promisesTotal? <li>{promisesTotal} Promises</li> : <></> }
                {secretsTotal? <li>{secretsTotal} Secrets</li> : <></> }
            </ul>
        </div>
    )
}

export default Checkout;