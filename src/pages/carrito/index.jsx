import React, { useContext } from "react";
import { CartContext } from "../../contexto/CartContext";

const Carrito = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.map((producto) => (
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
        </div>
      ))}
    </div>
  );
};

export default Carrito;
