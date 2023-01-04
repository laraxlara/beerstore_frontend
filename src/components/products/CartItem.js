import React, { useContext } from 'react'
import { formatCurrency } from '../../utilities/formatCurrency'
import img from '../../images/brewdogpunkIPA.jpg'

const CartItem = ({image, name, price, description, onClick}) => {
  return (
    <>
      <div className="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
        <div className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative">
          <img src={img} loading="lazy" alt="Cart Item" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </div>
        <div className="flex flex-col justify-between flex-1 py-4">
            <div className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">{name}</div>
            <span className="block text-gray-500">{description}</span>
        </div>
        <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
          <div className="flex flex-col items-start gap-2">
            <button className="text-orange-500 hover:text-orange-600 active:text-orange-700 text-sm font-semibold select-none transition duration-100" onClick={onClick}>Delete</button>
          </div>
          <div className="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
            <span className="block text-gray-800 md:text-lg font-bold">{formatCurrency(price)}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
