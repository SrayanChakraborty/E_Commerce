
import React from 'react';
import Cart from './pages/cart.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Productlist from './pages/productlist.jsx';
import Register from './pages/register.jsx';
import Singleproduct from './pages/singleproduct.jsx';
import {
    BrowserRouter ,
    Routes,
    Route,
    Navigate
    
}from "react-router-dom";
import { useSelector } from 'react-redux';




function App(){
    const user=useSelector((state)=>state.user.currentUser)
    return(
        
        <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="products/:category" element={<Productlist />}></Route>
            
            <Route path="product/:id" element={<Singleproduct />} />
            <Route path="cart" element={<Cart />} />
            

            <Route path="login" element={user ? <Navigate to ="/"/> :<Login />} />
            
            <Route path="register" element={user? <Navigate to="/"  />:<Register  />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App;

  