import React, { useState, useEffect, createContext,useReducer, useContext } from 'react'
import { displayProducts } from '../api/products'

export const ProductsContext = createContext()

export const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([])

    const getData = async () => {
        try {
          const response = await displayProducts()
          setProducts(response.data.products)
        } catch (error) {
            console.log(error)
          }         
      }
    
      useEffect(() => {
        getData()
      }, [])

    return (
        <ProductsContext.Provider value={{ products, setProducts}}>
            {props.children}
        </ProductsContext.Provider>
    )
}


export function useProductsContext() {
  return useContext(ProductsContext)
}