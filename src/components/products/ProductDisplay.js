import React, { useState, useEffect ,useContext } from 'react'
import {useParams} from "react-router-dom"
import Layout from '../../components/layout'
import { formatCurrency } from '../../utilities/formatCurrency'
import { ProductsContext } from '../../context/ProductsContext'
import { ShoppingCartContext } from '../../context/ShoppingCartContext'

import img from '../../images/flysianIPA.jpg'

const ProductDisplay = ({ product }) => {
  const { id } = useParams()
  const {products} = useContext(ProductsContext)
  const { addToCart, cart } = useContext(ShoppingCartContext)

  const [selectedProduct, setSelectedProduct] = useState([])

  useEffect(() => {
    const findProduct = () => {
      const thisProduct = products.find((product) => product.id === id)
      setSelectedProduct(thisProduct)
    }
    findProduct()
  }, [id, cart])


  return (
    <>
      <Layout>
        <div>
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
              <div className="grid md:grid-cols-2 gap-8">        
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg overflow-hidden relative">
                    <img src={img} loading="lazy" alt="Beer" className="w-full h-full object-cover object-center" />
                  </div>
                </div>           
                <div className="md:py-8">            
                  <div className="mb-2 md:mb-3">

                    {selectedProduct.available === true ? 
                      <span className="inline-block text-gray-500 mb-0.5">ON STOCK</span> : 
                      <span className="inline-block text-gray-500 mb-0.5">NOT ON STOCK</span> }
                    
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">{selectedProduct.name}</h2>
                  </div>             
                  <div className="mb-4 md:mb-6">
                    <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3"></span>
                    <div className="flex flex-wrap gap-2">
                      </div>
                  </div>             
                  <div className="mb-4">
                    <div className="flex items-end gap-2">
                      <span className="text-gray-800 text-xl md:text-2xl font-bold">{formatCurrency(selectedProduct.price)}</span>
                    </div>
                  </div>             
                  <div className="flex items-center text-gray-500 gap-2 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                    <span className="text-sm">2-4 day shipping</span>
                    </div>             
                    <div className="flex gap-2.5">                  
                      <button className="inline-block flex-1 sm:flex-none bg-orange-600 hover:bg-orange-500 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3" onClick={addToCart.bind(this, selectedProduct)}>Add to cart</button>
                      <a href="/" className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </a>
                    </div>             
                    <div className="mt-10 md:mt-16 lg:mt-20">
                    <div className="text-gray-800 text-lg font-semibold mb-3">Description</div>
                    <p className="text-gray-500">{selectedProduct.description}</p>
                  </div>           
                </div>            
              </div>
            </div>
          </div>
        </div>         
      </Layout>
    </>
    
  )
}

export default ProductDisplay
