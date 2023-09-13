import axios from 'axios';

const fetchProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products from external API');
    }
};

export default {
    fetchProducts,
};
