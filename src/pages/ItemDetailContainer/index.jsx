import { useParams } from 'react-router-dom';
import ItemDetailCard from '../../components/productos/ItemDetailCard/ItemDetailCard';
import { useFetch } from '../../components/Constantes/Hooks/useFetch';

function ItemDetailContainer() {
  const { id } = useParams();
  const { data: productos } = useFetch('/productos/productos.json', {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  });

  const producto = productos.find((producto) => producto.id === parseInt(id));
 
  return (
    <>
      <div>
        <h3>Detalles de producto</h3>
        {producto && <ItemDetailCard {...producto} />}
      </div>
    </>
  );
}

export default ItemDetailContainer;