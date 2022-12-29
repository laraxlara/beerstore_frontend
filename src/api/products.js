import axios from 'axios'

export async function displayProducts(productsData) {
    return await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/products`,
        productsData
    )
}
