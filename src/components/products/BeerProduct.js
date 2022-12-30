import React from 'react'
import { Link } from 'react-router-dom'

const BeerProduct = (link, type, name) => {
  return (
    <>
        <Link to={link} className="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Beer" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
            <div className="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
            <div className="relative p-4 mt-auto">
                <span className="block text-gray-200 text-sm">{type}</span>
                <h2 className="text-white text-xl font-semibold transition duration-100 mb-2">{name}</h2>
                <span className="text-indigo-300 font-semibold">Read more</span>
            </div>
        </Link>
    </>
  )
}

export default BeerProduct
