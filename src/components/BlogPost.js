import React from 'react'
import { Link } from 'react-router-dom'

import two from '../images/2.jpg'

const BlogPost = ({link, title}) => {
  return (
    <>
        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
            <Link to={link} className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                <img src={two} loading="lazy" alt="Blog" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
            </Link>
            <div className="flex flex-col flex-1 p-4 sm:p-6">
                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                    <Link to={link} className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{title}</Link>
                </h2>
                <div className="flex justify-between items-end mt-auto">
                    <span className="text-gray-500 text-sm border rounded px-2 py-1">Read More</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogPost
