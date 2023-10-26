import './App.css';
import './styles/roots.css';
import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './pages/Home';
import Root from './Root'
import About from "./pages/About";
import Products from './pages/Products';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Basket from './pages/Basket';
 

const appRouter = createBrowserRouter(createRoutesFromElements( 
  <Route path='/' element={ <Root/> } >
      <Route path='home' element={ <Home/> } />
      <Route path='products' element={ <Products/> } />
      <Route path="product-details-page/:stone" element={ <ProductDetailsPage/> } />
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
