import React, { useContext } from "react";
import { CartContext } from "../../contexto/CartContext";

const Carrito = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.map((producto) => (
        <div className="card mb-3">
          <div key={producto.id}>
            <img src={`../media/${producto.img}`} alt={producto.nombre} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <p className="card-text">stock: {producto.stock}</p>
              <p className="card-text">precio por unidad: ${producto.precio}</p>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrito;
