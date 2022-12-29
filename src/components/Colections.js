import React from 'react'
import { Link } from 'react-router-dom'
import ipa from '../images/ipa.jpg'
import ale from '../images/ale.jpg'

const Colections = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Type</h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link to="/beer/ale" className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
              <img src={ale} loading="lazy" alt="ALE" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
              <div className="flex flex-col relative">
                <span className="text-white text-lg lg:text-xl font-semibold">Ale</span>
              </div>
            </Link>
            <Link to="/beer/ipa" className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4">
              <img src={ipa} loading="lazy" alt="IPA" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
              <div className="flex flex-col relative">
                <span className="text-white text-lg lg:text-xl font-semibold">Ipa</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Colections
