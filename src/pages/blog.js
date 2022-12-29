import React, { useEffect, useContext } from 'react'
import Layout from '../components/layout'
import { PostsContext } from '../context/PostsContext'
import axios from 'axios'

import two from '../images/2.jpg'

const Blog = (props) => {
  const {posts, setPosts} = useContext(PostsContext)

  const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/posts')
      setPosts(response.data.posts)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect (() => {
    getPosts()
  }, [])

  return (
    <Layout>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
          {posts && posts.map((post) => {
            return (<div className="flex flex-col bg-white border rounded-lg overflow-hidden">
            <a href="/" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
              <img src={two} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
            </a>
            <div className="flex flex-col flex-1 p-4 sm:p-6">
              <h2 className="text-gray-800 text-lg font-semibold mb-2">
                <a href="/" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{post.title}</a>
              </h2>
              <p className="text-gray-500 mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
              <div className="flex justify-between items-end mt-auto">
                <div className="flex items-center gap-2">
                </div>
                <span className="text-gray-500 text-sm border rounded px-2 py-1">Read More</span>
              </div>
            </div>
          </div>)
          })}     
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
