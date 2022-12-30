import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'
import Layout from '../components/layout'
import ShopItem from '../components/products/ShopItem'
import { formatCurrency } from '../utilities/formatCurrency'


const Shop = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext)

  return (
  <Layout>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end gap-4 mb-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">

            {products && products.map((product) => {
              return (
                  <ShopItem key={product.id} name={product.name} price={product.price} onClick={() => { navigate(`/shop/${product.id}`) }} />        
              )             
            })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Shop
