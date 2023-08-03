import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto, cantidad) => {

        const itemAgregado = { ...producto, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = (nuevoCarrito.find((producto) => producto.id === itemAgregado.id));

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;

        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);

    }
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito }}>{children}</CartContext.Provider>)
};

