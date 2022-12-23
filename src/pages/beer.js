import React, { useContext } from 'react'
import Layout from '../components/layout'
import { ProductsContext } from '../context/ProductsContext'

const BeerPage = () => {
    const {products} = useContext(ProductsContext)

  return (
    <Layout>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div class="mb-10 md:mb-16">
                    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>
                    <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                </div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                    {products && products.map((product) => {
                        return (
                            <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                                <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
                                <div class="relative p-4 mt-auto">
                                    <span class="block text-gray-200 text-sm">{product.type}</span>
                                    <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">{product.name}</h2>
                                    <span class="text-indigo-300 font-semibold">Read more</span>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default BeerPage
