import React, {useEffect, useState} from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from "./pages/About";
import Products from './pages/Products';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Basket from './pages/Basket';
import Checkout from './pages/Checkout';

const Root = () => {


    const routes = [
        // { path: 'home', element: <Home /> },
        { path: 'products', element: <Products /> },
        { path: 'product-details-page/:stone', element: <ProductDetailsPage /> },
        { path: 'about', element: <About /> },
        { path: 'basket', element: <Basket /> },
        { path: 'checkout', element: <Checkout /> },
      ];
    const routeElement = useRoutes(routes);





    return (
        <>
            <Header/>
            <div className="App-main">
                {/* Render Home if no routes match */}
                {routeElement || <Home />} 
                {/* <Outlet /> */}
            </div>
            <Footer/>
        </>
    );
};

export default Root;