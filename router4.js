import React from "react";
import { BrowserRouter,NavLink,Route,Routes,Navigate} from "react-router-dom"
import Products from "./src/products";

    <Routes style={{margin:'20px'}}>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/member" Component={Member}/>
        <Route path="/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>