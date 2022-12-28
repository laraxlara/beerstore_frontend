import axios from 'axios'

export async function displayProducts(productsData) {
    return await axios.get(
        'http://thecrafthut-api.onrender.com/api/products',
        productsData
    )
}
