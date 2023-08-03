import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const agregarAlCarrito = (producto, cantidad) => {
    const itemAgregado = { ...producto, cantidad };
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }

    const totalItems = nuevoCarrito.reduce((acc, item) => acc + item.cantidad, 0);
    setCartItemCount(totalItems);
    setCarrito(nuevoCarrito);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
