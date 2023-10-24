import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Outlet

const Root = () => {
    return (
        <>
            <Header/>
            <div className="App-main">
                <Outlet />
            </div>
            <Footer/>
        </>
    );
};

export default Root;