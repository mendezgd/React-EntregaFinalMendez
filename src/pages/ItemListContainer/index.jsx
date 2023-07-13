import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../../components/productos/Cards/Cards';
import './style.css';
import { useFetch } from '../../components/Constantes/Hooks/useFetch';

function ItemListContainer() {
  const navigate = useNavigate();
  const { data: productos } = useFetch();
  
  const detalleOn = (id) => {
    navigate(`/item/${id}`);
  }

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