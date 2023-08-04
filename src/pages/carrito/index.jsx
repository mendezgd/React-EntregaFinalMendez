import React, { useContext } from "react";
import { CartContext } from "../../contexto/CartContext";

const Carrito = () => {
  const { carrito, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.map((producto) => (
        <div key={producto.id} className="card">
          <img src={`../media/${producto.img}`} alt={producto.nombre} className="card-img-top img-fluid" style={{ maxWidth: "600px", maxHeight: "450px" }} />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <p className="card-text">stock: {producto.stock}</p>
            <p className="card-text">precio por unidad: ${producto.precio}</p>
            <p className="card-text">cantidad agregada: {producto.cantidad}</p>
            <p>Total: {producto.precio * producto.cantidad}</p>
            <button onClick={() => eliminarDelCarrito(producto.id)} className="btn btn-secondary btn-sm">Eliminar del carrito</button>
          </div>
        </div>
      ))}
      <div className="d-grid gap-2">
        <button className='btn btn-success btn-sm checkout'>Proceder a checkout</button>
        <button onClick={handleVaciar} className='btn btn-danger btn-sm vaciar'>Vaciar el carrito</button>
      </div>
    </div>
  );
};

export default Carrito;
