import React from 'react'
import { formatCurrency } from '../../utilities/formatCurrency'

import img from '../../images/lostlakeIPA.jpg'

const ShopItem = ({name, price}) => {
  return (
    <>
        <span className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
            <img src={img} loading="lazy" alt="Beer Product" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
        </span>
        <div>
            <span className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">{name}</span>
            <div className="flex items-end gap-2">
                <span className="text-gray-800 lg:text-lg font-bold">{formatCurrency(price)}</span>
            </div>
        </div> 
    </>
  )
}

export default ShopItem
