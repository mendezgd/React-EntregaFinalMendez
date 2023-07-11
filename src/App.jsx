import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cards from './components/productos/Cards/Cards';
import Detalle from './components/productos/Detalles/Detalle';

function App() {
  const [productos, setProductos] = useState([]);
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [detalleProducto, setDetalleProducto] = useState({});

  const detalleOn = (id) => {
    setMostrarDetalle(true);
    const encontrarProducto = productos.find((producto) => producto.id === id);
    setDetalleProducto(encontrarProducto);
  }
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

      {mostrarDetalle ? (
        <>
          <Detalle {...detalleProducto} />
        </>
      ) : (
        <>
          <div className="container text-center">
            <div class="row">
                {
                  productos.map((producto) => (
                    <Cards {...producto} detalleOn={detalleOn} />
                  ))
                }
              </div>
          </div>
        </>
      )
      }
    </>
  );
}


export default App;