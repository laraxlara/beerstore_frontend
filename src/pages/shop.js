import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../context/ProductsContext'
import Layout from '../components/layout'
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
                <div key={product.id} className='product-display' onClick={() => { navigate(`/shop/${product.id}`) }}>
                  <span className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Beer Product" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                    <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
                  </span>
                  <div>
                    <span className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">{product.name}</span>
                    <div className="flex items-end gap-2">
                      <span className="text-gray-800 lg:text-lg font-bold">{formatCurrency(product.price)}</span>
                    </div>
                  </div>{" "}
                </div>         
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
