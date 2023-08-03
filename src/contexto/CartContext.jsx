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

        const totalProductos = nuevoCarrito.reduce((acc, item) => acc + item.cantidad, 0);
        setCartItemCount(totalProductos);
        setCarrito(nuevoCarrito);
    };

    const eliminarDelCarrito = (productoEliminadoId) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== productoEliminadoId);
        const totalProductos = nuevoCarrito.reduce((acc, item) => acc + item.cantidad, 0);
        setCartItemCount(totalProductos);
        setCarrito(nuevoCarrito);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setCartItemCount([0]);
        
    }

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, cartItemCount, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
};
