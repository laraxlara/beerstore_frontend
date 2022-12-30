import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.png'

const Footer = () => {
  return (
    <>
      <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
        <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col items-center border-t pt-6">
            <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6 mb-4">
              <Link to="/" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Home</Link>
              <Link to="/about" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">About</Link>
              <Link to="/beer" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Beer</Link>
              <Link to="/blog" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Blog</Link>
              <Link to="/shop" className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Shop</Link>
            </nav>
            <div className='w-[100px]'>
              <img src={logo} alt='Beerstore' />
            </div>
          </div>
          <div className="text-gray-400 text-sm text-center py-8">© 2021 - The Craft Hut. All rights reserved.</div>
        </footer>
      </div>
    </>
  )
}

export default Footer
