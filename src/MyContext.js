import React, { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0); // Set your initial state here
  // console.log('Quantity in Context:', quantity);

  const [emeraldQuant, setEmeraldQuant] = useState(0);
  const [rubyQuant, setRubyQuant] = useState(0);
  const [amberQuant, setAmberQuant] = useState(0);
  const [quartzQuant, setQuartzQuant] = useState(0);
  const [sapphireQuant, setSapphireQuant] = useState(0);
  const [amethystQuant, setAmethystQuant] = useState(0);

  const [wishesTotal, setWishesTotal] = useState(0);
  const [promisesTotal, setPromisesTotal] = useState(0);
  const [secretsTotal, setSecretsTotal] = useState(0);



  //set local variables : if state changes.
  // useEffect(()=> {

  //   if (parseInt(window.localStorage.getItem('quantity'))){
  //     console.log('we still have local');
  //   }

  // }, [])

  //set local variables : if state changes.

  // if (!(parseInt(window.localStorage.getItem('quantity')) )< quantity) {
  //   console.log('local < quantity');
  //   window.localStorage.setItem('quantity', quantity);
  // }


  return (
    <MyContext.Provider value={{ 
        quantity, setQuantity, 
        emeraldQuant, setEmeraldQuant,
        rubyQuant, setRubyQuant,
        amberQuant, setAmberQuant,
        quartzQuant, setQuartzQuant,
        sapphireQuant, setSapphireQuant,
        amethystQuant, setAmethystQuant,
        wishesTotal, setWishesTotal,
        promisesTotal, setPromisesTotal,
        secretsTotal, setSecretsTotal
        }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};