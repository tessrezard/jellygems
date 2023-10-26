import React from 'react';
import { Link } from "react-router-dom";
import Banner from '../components/Banner';


function Home() {
    return (
        <div>
          <Banner/>
        <h1>
        The nation's favorite 
         imaginary  

        sweet shop. </h1>
        <p> This is a website that trades in imaginary sweets. <br/>
    The currecies we trade in are wishes and secrets. <br/>
    Would you like to donate? </p>
      </div>
    );
  }
  
  export default Home;