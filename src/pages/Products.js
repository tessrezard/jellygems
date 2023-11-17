import React from 'react'
import { useParams, Link } from 'react-router-dom';
import jellyGemsObj from '../JellyGemsObjects';
import GridProduct from '../components/GridProduct';
import Banner from '../components/Banner';
import styles from '../styles/Products.module.css'


function Products() {


    const stones = Object.keys(jellyGemsObj);
    // console.log(stones);


    if (!jellyGemsObj) {
        return <h2>Oh dear... looks like we have encountered an issue! :S  ... deep, forgiving breaths everyone...</h2>;
    }


    return (
        <>
            <main>
                <Banner />
                <div className={styles.productsGrid}>
                    {stones.map(stone => (
                        <Link
                            key={stone}
                            to={`/product-details-page/${stone}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <GridProduct
                                name={jellyGemsObj[stone].name}
                                description={jellyGemsObj[stone].description}
                                brief={jellyGemsObj[stone].brief}
                                keyWords={jellyGemsObj[stone].keyWords}
                                heroImg={jellyGemsObj[stone].heroImg}
                                pairImg={jellyGemsObj[stone].pairImg}
                            />
                        </Link>
                    ))}
                    {/* {Object.keys(jellyGemsObj).forEach((stone) => {
                        <p>{jellyGemsObj[stone]}</p>
                    })} */}
                </div>
            </main>
        </>
    )
}

export default Products