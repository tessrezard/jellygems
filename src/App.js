import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './pages/Home';
import Root from './Root'
import About from "./pages/About";
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Basket from './pages/Basket';


const appRouter = createBrowserRouter(createRoutesFromElements( 
  <Route path='/' element={ <Root/> } >
      <Route path='home' element={ <Home/> } />
      <Route path='products' element={ <Products/> } />
      <Route path="product-details" element={ <ProductDetails/> } />
      <Route path="about" element={ <About/> } />
      <Route path='basket' element={ <Basket/> } />
      {/* <Route path='donate' element={ <Donate/> } /> */}

  </Route>
  ));

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
