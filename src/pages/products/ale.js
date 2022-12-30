import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/layout'
import { ProductsContext } from '../../context/ProductsContext'

const Ale = () => {
    const { products } = useContext(ProductsContext) 

  return (
    <Layout>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">ALE</h2>
                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is Link section of some simple filler text, also known as placeholder text. It shares some characteristics of Link real written text but is random or otherwise generated.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-4 md:gap-6 xl:gap-8">
                    
                    {products && products.map((product) => {
                        if (product.type === 'ALE') {
                        return (
                            <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
                                <Link to="/" className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Product" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                                </Link>
                                <div className="flex flex-col gap-2 p-4 lg:p-6">
                                    <span className="text-gray-400 text-sm">{product.type}</span>
                                    <h2 className="text-gray-800 text-xl font-bold">
                                        <Link to="/" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">New trends in Tech</Link>
                                    </h2>
                                    <p className="text-gray-500">This is Link section of some simple filler text, also known as placeholder text.</p>
                                    <div>
                                        <Link to="/" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        )
                        } else {
                            return null
                        }
                    })}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Ale
