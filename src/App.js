import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import ReadMore from "./Components/ReadMore";
import Cart from "./Components/card";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/Cart' element={<Cart />}></Route>
    <Route path='/ReadMore' element={<ReadMore />}></Route>
    </Routes>
    
    </BrowserRouter>
   
  );
};

export default App;
