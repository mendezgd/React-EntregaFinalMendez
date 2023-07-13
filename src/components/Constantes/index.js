export const BASE_URL = '/productos/productos.json';

export const API_URLS = {
    PRODUCTS: {
        url: `${BASE_URL}/productos`,
        config: {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        }
    },
}