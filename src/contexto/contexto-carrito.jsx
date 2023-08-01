import { createContext, useState } from "react";

const estadoInicial = {
    carrito: [],
    productos: [],
    setCarrito: () => { },
    handleIncrease: () => { },
    handleDecrease: () => { },
    handleAddToCart: () => { },
    total: 0,
};

export const CartContext = createContext(estadoInicial);

export const ProviderCarrito = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [productos, setProductos] = useState([]);

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
                handleAddToCart,
                handleDecrease,
                handleIncrease,
                productos,
                setProductos,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
