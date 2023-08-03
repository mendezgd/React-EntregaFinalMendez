import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer';
import Header from './components/header/Header';
import Requisitos from './pages/requisitos/requisitos';
import Donde from './pages/donde/donde';
import Navbar from './components/navbar/NavBar';
import './App.css';
import ItemDetailContainer from './pages/ItemDetailContainer';
import Carrito from './pages/carrito';
import { CartContext } from './contexto/CartContext';
import { useState } from 'react';


function App() {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {

    const itemAgregado = { ...producto, cantidad };

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = (nuevoCarrito.find((producto) => producto.id === itemAgregado.id));

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;

    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);

  };
  return (
    <>
      <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
        <BrowserRouter>
          <Header titulo="Peladingui Gunshop" logo={<img src="./media/testpela.png" className="logo" alt="logo de la empresa" />} />
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/requisitos' element={<Requisitos />} />
            <Route path='/donde' element={<Donde />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}

export default App;