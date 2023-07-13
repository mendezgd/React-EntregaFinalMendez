import { useParams } from 'react-router-dom';
import ItemDetailCard from '../../components/productos/ItemDetailCard/ItemDetailCard';
import { useFetch } from '../../components/Constantes/Hooks/useFetch';

function ItemDetailContainer() {
    const { Id } = useParams();


    return (
        <>
            <div>
                <p>Detalles de producto</p>
                <ItemDetailCard {...Id}/>
            </div>
        </>
    )
}

export default ItemDetailContainer