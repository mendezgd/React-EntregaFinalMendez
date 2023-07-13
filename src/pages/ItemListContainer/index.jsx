import React from 'react';
import Cards from '../../components/productos/Cards/Cards';
import './style.css';
import { useFetch } from '../../components/Constantes/Hooks/useFetch';

function ItemListContainer() {
  const { data: productos } = useFetch('/productos/productos.json', {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  });

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {productos.map((producto) => (
            <Cards key={producto.id} {...producto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;