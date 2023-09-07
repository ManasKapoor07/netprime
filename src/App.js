import React from 'react';
import Homescreen from './screens/homescreen.js';
import Login from './Login/Login.js';


import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    
    <div className='app'>
    
    
    
    <BrowserRouter>
    {!user ?(
      <Login />
    ) : (
      <Routes>
          <Route path="/" element={<Homescreen />} />
        </Routes>
      
    )}
    </BrowserRouter> 
    </div>
    
    
    
  );
}

export default App;
