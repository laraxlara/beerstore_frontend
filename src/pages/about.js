import React from 'react'
import Layout from '../components/layout'

import image from '../images/ipa.jpg'

const About = () => {
  return (
    <Layout>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">Beer Store</h1>
                <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                    This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text. The important factor when using filler text is that the text looks realistic otherwise it will not look very good.<br /><br />
                    This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <a href="/" target='_blank' className="text-orange-700 hover:text-orange-500 active:text-indigo-700 underline transition duration-100">random</a> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
                </p>
                <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">About us</h2>
                <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                <ul className="list-disc list-inside text-gray-500 sm:text-lg mb-6 md:mb-8">
                    <li>This is a section of some simple filler text</li>
                    <li>Also known as placeholder text</li>
                    <li>It shares some characteristics of a real written text</li>
                </ul>
                <blockquote className="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">“This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”</blockquote>
                <div className="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
                    <img src={image} loading="lazy" alt="Beer" className="w-full h-full object-cover object-center" />
                </div>
                <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Features</h2>
                <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            </div>
        </div>
    </Layout>
  )
}

export default About
