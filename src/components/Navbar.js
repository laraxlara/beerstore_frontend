import React, { useContext, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onLogout, fetchProtectedInfo } from '../api/auth'
import { unauthenticateUser } from '../redux/slices/authSlice'
import { ShoppingCartContext } from '../context/ShoppingCartContext'


import logo from '../images/logo.png'

const Navbar = () => {
    const navigate = useNavigate();
    const {isAuth} = useSelector(state => state.auth)
    
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [protectedData, setProtectedData] = useState(null)
    const { cart } = useContext(ShoppingCartContext)

    const signout = async () => {
        try {
          await onLogout()
    
          dispatch(unauthenticateUser())
          localStorage.removeItem('isAuth')
          navigate('/signin')
        } catch (error) {
          console.log(error.response)
        }
      }
    
      const protectedInfo = async () => {
        try {
          const { data } = await fetchProtectedInfo()
    
          setProtectedData(data.info)
    
          setLoading(false)
        } catch (error) {
          signout()
        }
      }

      const quantity = cart.reduce((count, product) => {
        return count + product.quantity
      }, 0)
    
      useEffect(() => {
        protectedInfo()
      }, [])

  return (
    <div>
      <header className="border-b mb-8">
            <div className="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto">
                <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
                    <img src={logo} alt='' style={{ width: '4rem'}} />The Craft Hut
                </a>
                <nav className="hidden lg:flex gap-12 2xl:ml-16">
                    <a href="/" className="text-gray-600 hover:text-orange-700 text-lg text-lg font-semibold">Home</a>
                    <a href="/about" className="text-gray-600 hover:text-orange-700 text-lg font-semibold transition duration-100">About</a>
                    <a href="/beer" className="text-gray-600 hover:text-orange-700 text-lg font-semibold transition duration-100">Beer</a>
                    <a href="/blog" className="text-gray-600 hover:text-orange-700 text-lg font-semibold transition duration-100">Blog</a>
                    <a href="/shop" className="text-gray-600 hover:text-orange-700 text-lg font-semibold transition duration-100">Shop</a>
                </nav>
                <div className="flex sm:border-l border-r divide-x">

                    {isAuth ? <div onClick={() => signout()} className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Logout</span>
                    </div>  : <a href="/signin" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Account</span>
                    </a>}

                        <a href="/cart" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Cart</span>
                        {quantity > 0 && (
                            <div className='absolute bg-orange-600 text-black rounded-full h-6 w-6 pl-[0.37rem] translate-x-4 translate-y-11 transform'>{quantity}</div>
                        )}
                        </a>
                        
                    <button type="button" className="w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 flex lg:hidden flex-col justify-center items-center hover:bg-gray-100 active:bg-gray-200 transition duration-100 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden sm:block text-gray-500 text-xs font-semibold">Menu</span>
                    </button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar
