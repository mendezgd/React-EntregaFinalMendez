import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../../components/productos/Cards/Cards';
import './style.css';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  const detalleOn = (id) => {
    navigate(`/item/${id}`);
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
      <div className="container text-center">
        <div className="row">
          {productos.map((producto) => (
            <div className="col" key={producto.id}>
              <Cards {...producto} detalleOn={detalleOn} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;