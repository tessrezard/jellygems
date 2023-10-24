import React from 'react'
import { useParams, Link } from 'react-router-dom';
import jellyGemsObj from '../JellyGemsObjects';
import GridProduct from '../components/GridProduct';

function Products() {

    const { stone } = useParams('stone');

    const stones = Object.keys(jellyGemsObj);
    console.log(stones);


    if (!jellyGemsObj) {
        return <h2>Oh dear... looks like we have encountered an issue! :S  ... deep, forgiving breaths everyone...</h2>;
    }


    return (
        <div>
            <div >
                {stones.map(stone => (
                    <Link
                        key={stone}
                        to={`/product-details-page/${stone}`}
                        className="pet"
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
                {Object.keys(jellyGemsObj).forEach((stone) => {
                    <h1>{jellyGemsObj[stone]}</h1>
                    console.log(jellyGemsObj[stone].brief);
                })}
            </div>
            <h1>This is the products page</h1>

        </div>
    )
}

export default Products