
import React from 'react';
import './App.css';

import IndexApp from './pages/index/IndexApp';

import Login from './pages/login/Login';
import SignUp from './pages/login/Signup';
import Home from './pages/home/home';
import Alimentacion from './pages/alimentacion/Alimentacion'
import RegistroAlimentacion from './pages/registroAlimentacion/RegistroAlimentacion';
import NuevaMedida from './pages/nuevaMedida/NuevaMedida';
import AtencionMedica from './pages/atencionMedica/AtencionMedica';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Salud from './pages/salud/Salud';

function App() {
  return (
    <div className="container-fluid overflow-hidden">
    <BrowserRouter>
    <Routes>
   
      <Route path="/" element={<IndexApp  />} />
      <Route path="/login" element={<Login  />} />
      <Route path="/signup" element={<SignUp  />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/alimentacion" element={<Alimentacion  />} />
      <Route path='/alimentacion/registro' element={<RegistroAlimentacion  />} />
      <Route path='/nuevaMedida' element={<NuevaMedida/>}/>
      <Route path='/atencion-medica' element= {<AtencionMedica/>}/>
      <Route path='/salud' element={<Salud/>}/>


    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
