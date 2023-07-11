import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from './components/Cards/Cards';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch('/productos/productos.json', {
          method: 'GET',
        });

        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    getProductos();
  }, []);

  return (
    <>
      <Header titulo="Peladingui Gunshop" logo={<img src="./media/testpela.png" className="logo" alt="logo de la empresa" />} />
      <Navbar />
      <ItemListContainer greeting="Hola Bienvenido!" />
      <div className="container text-center">
        <div className='row rows-2'>
          {
            productos.map((producto) => (
              <Cards {...producto} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;