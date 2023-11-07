import React from 'react';
import { Link } from "react-router-dom";
import Banner from '../components/Banner';
import styles from '../styles/Home.module.css'


function Home() {
  return (
    <>
      <main>

        <div className={styles.homeContainer} >
          <div>
            <Banner />
            <h1 >
              The nation's favorite
              imaginary sweet shop.
            </h1>
            <div >
              <Link to="/products" className={styles.button}>
                Shop our sweets collection
              </Link>
            </div>

            <p className={styles.pText}>
              The currencies we trade in are wishes and secrets and promises. <br />
            </p>
          </div>

        </div>
      </main>
    </>
  );
}

export default Home;