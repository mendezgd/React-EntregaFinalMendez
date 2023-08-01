import { useParams } from 'react-router-dom';
import ItemDetailCard from '../../components/productos/ItemDetailCard/ItemDetailCard';
import { useFetch } from '../../components/Constantes/Hooks/useFetch';
import { useEffect, useContext } from 'react';
import { CartContext } from '../../contexto/contexto-carrito';

function ItemDetailContainer() {
  const { id } = useParams();
  const { data: productos } = useFetch('/productos/productos.json', {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  });

  const producto = productos.find((producto) => producto.id === parseInt(id));

  const { setProductos } = useContext(CartContext);

  useEffect (() => {
    if (productos?.length > 0) {
      setProductos(productos);
    }
  }, [productos, setProductos]);


  console.log({productos});

  return (
    <div>
      <h3>Detalles de producto</h3>
      {producto && (
        <ItemDetailCard
          {...producto}
          // If needed, you can pass any other props required by ItemDetailCard
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
