import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState(1);

    const handleIncrease = () => {
        if (cantidad < stock) {
            setCantidad((prevCantidad) => prevCantidad + 1);
        }
    };

    const handleDecrease = () => {
        if (cantidad > 1) {
            setCantidad((prevCantidad) => prevCantidad - 1);
        }
    };

    const handleAddToCart = () => {
        const itemInCarrito = carrito.find((item) => item.id === id);
        const totalCantidadInCart = carrito.reduce((total, item) => total + item.cantidad, 0);

        if (!Number.isInteger(cantidad) || cantidad <= 0 || totalCantidadInCart + cantidad > stock) {
            return;
        }

        if (!itemInCarrito) {
            setCarrito((currentCarrito) => [...currentCarrito, { id, nombre: producto.nombre, precio: producto.precio, cantidad }]);
        } else {
            setCarrito((currentCarrito) =>
                currentCarrito.map((item) =>
                    item.id === id ? { ...item, cantidad: item.cantidad + cantidad } : item
                )
            );
        }
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                setCarrito,
                handleIncrease,
                handleDecrease,
                handleAddToCart,
                cantidad,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
