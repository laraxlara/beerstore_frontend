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
    localStorage.setItem('cart', JSON.stringify(cart))
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
                  <div className="mb-4">
                    <div className="flex items-end gap-2">
                      <span className="text-gray-800 text-xl md:text-2xl font-bold">{formatCurrency(selectedProduct.price)}</span>
                    </div>
                  </div>             
                  <div className="flex items-center text-gray-500 gap-2 mb-6">
                    </div>             
                    <div className="flex gap-2.5">                  
                      <button className="inline-block flex-1 sm:flex-none bg-orange-600 hover:bg-orange-500 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3" onClick={addToCart.bind(this, selectedProduct)}>Add to cart</button>
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
