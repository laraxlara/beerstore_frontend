import axios from 'axios'

export async function displayProducts(productsData) {
    return await axios.get(
        'https://thecrafthut-api.onrender.com/api/products',
        productsData
    )
}
