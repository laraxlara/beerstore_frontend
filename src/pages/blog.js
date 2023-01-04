import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout'
import BlogPost from '../components/BlogPost'
import { PostsContext } from '../context/PostsContext'
import axios from 'axios'

const Blog = (props) => {
  const { posts, setPosts } = useContext(PostsContext)
  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/api/posts`)
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
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">

          {posts && posts.map((post) => {
            return (
              <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                <BlogPost key={post.id} link={post.id} title={post.title} onClick={() => {navigate(`/blog/${post.title}`)}} />
              </div>
            )
          })}   

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
