import React from 'react'
import { Link } from 'react-router-dom'

import two from '../images/2.jpg'

const BlogPost = ({key, link, title, onClick}) => {
  return (
    <>
      <div key={key}>
        <Link to={link} className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
            <img src={two} loading="lazy" alt="Blog" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        </Link>
        <div className="flex flex-col flex-1 p-4 sm:p-6">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
                <Link to={link} className="hover:text-orange-500 active:text-orange-600 transition duration-100" onClick={onClick}>{title}</Link>
            </h2>
        </div>
      </div>
    </>
  )
}

export default BlogPost
