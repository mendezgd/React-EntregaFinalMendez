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

  const producto = productos.find((producto) => producto.id === parseInt(id));

  const agregarCarrito = (id, nombre, precio, cantidad) => {
    const producto = productos.find((producto) => producto.id === id);
    const itemInCarrito = carrito.find((item) => item.id === id);

    if (!Number.isInteger(cantidad) || cantidad <= 0 || cantidad > producto.stock) {
      return;
    }

    if (!itemInCarrito) {
      setCarrito((currentCarrito) => [...currentCarrito, { ...producto, cantidad }]);
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
      {producto && <ItemDetailCard {...producto} agregarCarrito={agregarCarrito} />}
    </div>
  );
}

export default ItemDetailContainer;
