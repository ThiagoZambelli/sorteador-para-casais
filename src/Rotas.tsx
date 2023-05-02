import Inicio from 'pages/Inicio';
import PaginaComum from 'pages/PaginaComum';
import PaginaSorteio from 'pages/PaginaSorteio';
import React from 'react'
import {Routes, Route } from 'react-router-dom';

export default function Rotas() {
  return (
    <Routes>
        <Route path='/' element={<PaginaComum />} >
          <Route index element={<Inicio />} />
          <Route path='sorteio' element={<PaginaSorteio />} />
        </Route>
    </Routes>    
  )
}
