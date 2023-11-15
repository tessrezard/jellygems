import './styles/App.css';
import './styles/roots.css';
import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import Home from './pages/Home';
import Root from './Root'
import About from "./pages/About";
import Products from './pages/Products';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Basket from './pages/Basket';
import Checkout from './pages/Checkout';
import { MyProvider } from './MyContext';
import Home from './pages/Home';
 

const appRouter = createBrowserRouter(createRoutesFromElements( 
  
  <Route path='*' element={ <Root/> } >
      <Route path='home' element={ <Home/> } />
      <Route path='products' element={ <Products/> } />
      <Route path="product-details-page/:stone" element={ <ProductDetailsPage/> } />
      <Route path="about" element={ <About/> } />
      <Route path='basket' element={ <Basket/> } />
      <Route path='checkout' element={ <Checkout/> } />
  </Route>
  ));

function App() {

  
  return (
    <div className="App">
      <MyProvider>
        <RouterProvider router={appRouter}/>
      </MyProvider>
    </div>
  );
}

export default App;
