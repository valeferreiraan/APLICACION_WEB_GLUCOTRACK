
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

import Perfil from './pages/perfil/Perfil';
import UsuariosAdmin from './pages/usuariosAdmin/UsuariosAdmin';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Salud from './pages/salud/Salud';
import Historial from './pages/historialGlucosa/Historial';
import {SnackbarProvider} from 'notistack';

function App() {
  return (
    <div className="container-fluid overflow-hidden">
    <BrowserRouter>
    <SnackbarProvider maxSnack={2} autoHideDuration={2000}>    
    <Routes>
   
      <Route path="/" element={<IndexApp  />} />
      <Route path="/login" element={<Login  />} />
      <Route path="/signup" element={<SignUp  />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/alimentacion" element={<Alimentacion  />} />
      <Route path='/alimentacion/registro' element={<RegistroAlimentacion  />} />
      <Route path='/nuevaMedida' element={<NuevaMedida/>}/>
      <Route path='/perfil' element={<Perfil />} />
      <Route path='/atencion-medica' element= {<AtencionMedica/>}/>
      <Route path='/salud' element={<Salud/>}/>
      <Route path='/historial-glucosa' element={<Historial/>}/>
      <Route path='/nuevaMedida/historial-glucosa' element={<Historial/>}/>
      <Route path='/usuarios' element={<UsuariosAdmin/>}/>
          


    </Routes>
    </SnackbarProvider>

    </BrowserRouter>
    </div>
  );
}

export default App;
