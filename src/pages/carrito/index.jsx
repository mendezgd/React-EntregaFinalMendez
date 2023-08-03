import React, { useContext } from "react";
import { CartContext } from "../../contexto/CartContext";

const Carrito = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <img
            src={`../media/${producto.img}`} // Use 'producto.img' instead of 'img'
            alt={producto.nombre} // Use 'producto.nombre' instead of 'nombre'
            className="card-img-top item"
            width="150px"
            height="150px"
          />
          <p>{producto.descripcion}</p>
          <p>{producto.stock}</p>
          <p>${producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Carrito;
