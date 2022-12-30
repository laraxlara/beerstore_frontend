import React, { useContext } from 'react'
import Layout from '../components/layout'
import BeerProduct from '../components/products/BeerProduct'
import { ProductsContext } from '../context/ProductsContext'

const BeerPage = () => {
    const { products } = useContext(ProductsContext)

  return (
    <Layout>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="mb-10 md:mb-16">
                    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Beer</h2>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                    {products && products.map((product) => {
                        return (
                            <BeerProduct link={product.id} type={product.type} name={product.name} />
                        )
                    })}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default BeerPage
