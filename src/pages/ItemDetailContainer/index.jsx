import { useParams } from 'react-router-dom';
import ItemDetailCard from '../../components/productos/ItemDetailCard/ItemDetailCard';
import { useFetch } from '../../components/Constantes/Hooks/useFetch';
import { useCartContext } from '../../contexto/contexto-carrito';


function ItemDetailContainer() {
  const { id } = useParams();
  const { data: productos } = useFetch('/productos/productos.json', {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  });

  const producto = productos.find((producto) => producto.id === parseInt(id));

  const { handleAddToCart, handleDecrease, handleIncrease, carrito, cantidad } = useCartContext();

  console.log(producto);

  return (
    <div>
      <h3>Detalles de producto</h3>
      {producto && (
        <ItemDetailCard
          {...producto}
          handleAddToCart={handleAddToCart}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          cantidad={cantidad}
          carrito={carrito}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
