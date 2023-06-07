import React from 'react';
import Home from './Home';
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    //<BrowserRouter> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />       
       </Routes>
    //</BrowserRouter>
  );
}

export default Pages;
 