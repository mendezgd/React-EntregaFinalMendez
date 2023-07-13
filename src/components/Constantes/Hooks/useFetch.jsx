import { useEffect, useState } from "react";

export const useFetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/productos/productos.json')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, []);

    return {
        data,
    }
}
