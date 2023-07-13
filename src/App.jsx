import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer';
import Header from './components/header/Header';
import Requisitos from './pages/requisitos/requisitos';
import Donde from './pages/donde/donde';
import Navbar from './components/navbar/NavBar';
import './App.css';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Carrito from './pages/carrito';



function App() {

  return (
    <>
      <BrowserRouter>
        <Header titulo="Peladingui Gunshop" logo={<img src="./media/testpela.png" className="logo" alt="logo de la empresa" />} />
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/requisitos' element={<Requisitos />} />
          <Route path='/donde' element={<Donde />} />
          <Route path='/carrito' element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;