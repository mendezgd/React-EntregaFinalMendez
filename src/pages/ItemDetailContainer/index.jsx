import { useParams } from 'react-router-dom';
import ItemDetailCard from '../../components/productos/ItemDetailCard/ItemDetailCard';
import { useFetch } from '../../components/Constantes/Hooks/useFetch';
import { useState } from 'react';

function ItemDetailContainer() {

  const { id } = useParams();

  const { data: productos } = useFetch('/productos/productos.json', {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  });

  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  const producto = productos.find((producto) => producto.id === parseInt(id));
  const stock = producto ? producto.stock : 0;

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

  console.log({ carrito });

  return (
    <div>
      <h3>Detalles de producto</h3>
      {producto && (
        <ItemDetailCard
          {...producto}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleAddToCart={handleAddToCart}
          cantidad={cantidad}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
