
import React, { useEffect, useState } from 'react';
import jellyGemsObj from '../JellyGemsObjects';
import { useParams, Link } from 'react-router-dom';



function ProductDetailsPage() {
    const {stone} = useParams('stone');

    useEffect (() => {
        const getStoneInfo = () => {
            // console.log(jellyGemsObj.stone.name)
        }
    }, [stone])


    return (
        <div>
            <h1>This is the {stone} product details page</h1>
        </div>
    )
}

export default ProductDetailsPage;





