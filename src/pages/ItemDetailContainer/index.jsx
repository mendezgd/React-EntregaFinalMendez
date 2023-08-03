import { useParams } from 'react-router-dom';
import ItemDetailCard from '../../components/productos/ItemDetailCard/ItemDetailCard';
import { useFetch } from '../../components/Constantes/Hooks/useFetch';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexto/CartContext';

function ItemDetailContainer() {
  const { id } = useParams();
  const { data: productos } = useFetch('/productos/productos.json', {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  });

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const producto = productos.find((producto) => producto.id === parseInt(id));
  const stock = producto ? producto.stock : 0;

  const handleIncrease = () => {
    cantidad < producto.stock && setCantidad(cantidad + 1)
  };

  const handleDecrease = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  };

  return (
    <div>
      <h3>Detalles de producto</h3>
      {producto && (
        <ItemDetailCard
          {...producto}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          agregarAlCarrito={() => { agregarAlCarrito(producto, cantidad) }}
          cantidad={cantidad}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
