import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {

  return (
    <>
      <Header titulo="Peladingui Gunshop" logo={<img src="./public/testpela.png" className="logo" alt="logo de la empresa" />} />
      <Navbar />
      <ItemListContainer greeting="Hola Bienvenido!" />

    </>
  )
}

export default App
