import axios from 'axios'

export async function displayProducts(productsData) {
    return await axios.get(
        'http://localhost:5000/api/products',
        productsData
    )
}
