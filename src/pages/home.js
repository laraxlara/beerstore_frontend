import React from 'react'
import Layout from '../components/layout'
import Colections from '../components/Colections'
import Hero from '../components/Hero'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Colections />
      <Features />
      <Newsletter />
      <FAQ />
    </Layout>
  )
}

export default Home
