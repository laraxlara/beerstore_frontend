import React, { useState, useEffect, useContext } from 'react'
import {useParams} from "react-router-dom"
import { PostsContext } from '../context/PostsContext'
import Layout from '../components/layout'

const BlogPage = () => {
    const { posts } = useContext(PostsContext)
    const { id } = useParams()

    const [selectedPost, setSelectedPost] = useState([])

  useEffect(() => {
    const findPost = () => {
      const thisPost = posts.find((post) => post.id === id)
      setSelectedPost(thisPost)
    }
    findPost()
  }, [id])

  return (
    <Layout>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6">{selectedPost.title}</h1>
                <p lassName="text-gray-500">{selectedPost.created_on}</p>
                <p className="text-gray-500 sm:text-lg mb-6 md:mb-8 lg:mt-10">{selectedPost.text}</p>
            </div>
        </div>
    </Layout>
  )
}

export default BlogPage
