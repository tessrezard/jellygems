import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Outlet


const Root = () => {
    return (
        <>
            <Header/>
            <div className="App-main">
                {/* {Outlet ? <Outlet/> : <Home/>} */}
                <Outlet />
                {/* <Home /> */}
            </div>
            <Footer/>
        </>
    );
};

export default Root;