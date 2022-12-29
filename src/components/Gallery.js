import React from 'react'

import img1 from '../images/news.jpg'
import img2 from '../images/3.jpg'
import img3 from '../images/4.jpg'
import img4 from '../images/ale.jpg'

const Gallery = () => {
  return (
    <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
                    <div className="flex items-center gap-12">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Gallery</h2>
                        <p className="max-w-screen-sm hidden md:block text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
                    <a href="/" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                        <img src={img4} loading="lazy" alt="Brewery" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                        <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Delicious Food</span>
                    </a>
                    <a href="/" className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                        <img src={img2} loading="lazy" alt="Beer" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                        <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Enjoyable Time With Friends</span>
                    </a>
                    <a href="/" className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                        <img src={img3} loading="lazy" alt="Beer Store" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                        <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Variety Of Beers</span>
                    </a>
                    <a href="/" className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
                        <img src={img1} loading="lazy" alt="Tap" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
                        <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Domestic And International</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery
