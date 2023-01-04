import React, { useState, useEffect ,useContext } from 'react'
import {useParams} from "react-router-dom"
import { displayProducts } from '../api/products'
import ShopItem from '../components/products/ShopItem'
import CartItem from '../components/products/CartItem'
import Layout from '../components/layout'
import { formatCurrency } from '../utilities/formatCurrency'
import { ProductsContext } from '../context/ProductsContext'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

const Cart = () => {
  const { cart, removeFromCart } = useContext(ShoppingCartContext)
  const [bought, setBought] = useState(true)

  const quantity = cart.reduce((count, product) => {
    return count + product.quantity
  }, 0)

  const totalPrice = cart.reduce((count, product) => {
    return count + product.price
  }, 0)

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const handleClick = () => {
    setBought(false)
    window.localStorage.clear()
  }
  
  return (
    <>
      <Layout>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-lg px-4 md:px-8 mx-auto">

            {bought ? 
                <>
                    <div className="mb-6 sm:mb-10 lg:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Your Cart</h2>
                    </div>

                    {cart && cart.map((item) => {
                    return (
                        <div key={item.id} className='item-display'>
                        <CartItem key={item.id} name={item.name} price={item.price} description={item.description} onClick={removeFromCart.bind(this, item)} />
                        </div>      
                    )             
                    })}
            
                    <div className="flex flex-col items-end gap-4 mt-6">
                        <div className="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
                            <div className="flex justify-between items-start text-gray-800 gap-4">
                                <span className="text-lg font-bold">Total</span>
                                <br/>
                                <span className="flex flex-col items-end">
                                    <span className="text-lg font-bold">Number of items: {quantity}</span>
                                    <span className="text-lg font-bold">{formatCurrency(totalPrice)}</span>
                                </span>
                            </div>
                        </div>
                        <button className="inline-block bg-orange-600 hover:bg-orange-500 active:bg-orange-500 focus-visible:ring ring-orange-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3" onClick={handleClick}>Buy</button>
                    </div>
                </> 
                : 
                <h1 className="text-[2.5rem] font-light">Your Purchase Is Done!</h1> }          
          </div>
        </div>         
      </Layout>
    </>
  )
}

export default Cart
