import React from 'react'

const Features = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <div className="mb-10 md:mb-16">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Our competitive advantage</h2>
                <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
                <div className="flex flex-col items-center">
                    <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-orange-500 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Diversity</h3>
                    <p className="text-gray-500 text-center mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-orange-500 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-center mb-2">24/7 Customer Service</h3>
                    <p className="text-gray-500 text-center mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center bg-orange-500 text-white rounded-lg md:rounded-xl shadow-lg mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-center mb-2">Affordability</h3>
                    <p className="text-gray-500 text-center mb-2">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Features
