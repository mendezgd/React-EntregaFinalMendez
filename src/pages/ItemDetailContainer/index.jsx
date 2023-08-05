import { useParams } from 'react-router-dom';
import ItemDetailCard from '../../components/productos/ItemDetailCard/ItemDetailCard';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexto/CartContext';
import { db } from '../../firebase/data'
import { collection, getDocs } from 'firebase/firestore';

function ItemDetailContainer() {
  const { id } = useParams();

  useEffect(() => {

    const productosRef = collection(db, "productos");

    getDocs(productosRef)
      .then((resp) => {
        console.log(resp)
      })

  }, [categoria])

  const { carrito, agregarAlCarrito, vaciarCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  console.log({ carrito });

  const producto = productos.find((producto) => producto.id === parseInt(id));

  const handleIncrease = () => {
    cantidad < producto.stock && setCantidad(cantidad + 1)
  };

  const handleDecrease = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  };

  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div>
      <h3>Detalles de producto</h3>
      {producto && (
        <ItemDetailCard
          {...producto}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          handleVaciar={handleVaciar}
          agregarAlCarrito={() => { agregarAlCarrito(producto, cantidad) }}
          cantidad={cantidad}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
