
import React from 'react';
import './App.css';

import IndexApp from './pages/index/IndexApp';

import Login from './pages/login/Login';
import SignUp from './pages/login/Signup';
import Alimentacion from './pages/alimentacion/Alimentacion'


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid overflow-hidden">
    <BrowserRouter>
    <Routes>
   
      <Route path="/" element={<IndexApp  />} />
      <Route path="/login" element={<Login  />} />
      <Route path="/alimentacion" element={<Alimentacion  />} />
      
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
