// import React, { useState, useEffect ,useContext } from 'react'
// import {useParams} from "react-router-dom"
// import { displayProducts } from '../api/products'
// import Layout from './layout'
// import CartItem from './CartProduct'
// import { formatCurrency } from '../utilities/formatCurrency'
// import { ProductsContext } from '../context/ProductsContext'
// import { ShoppingCartContext } from '../context/ShoppingCartContext'


// const CartProduct = () => {
//   const { id } = useParams()
//   console.log(cartProducts)
//   const {products, setProducts} = useContext(ProductsContext)
//   const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartProducts, setCartProducts } = useContext(ShoppingCartContext)
//   const quantity = getItemQuantity(id)

//   // const [selectedProduct, setSelectedProduct] = useState([])

//   // useEffect(() => {
//   //   const findCartProduct = (cartProducts) => {
//   //     const cartProduct = cartProducts.find((product) => product.id === id)
//   //     setSelectedProduct(cartProduct)
//   //     console.log(cartProduct)
//   //   }

//   //   findCartProduct()
//   // }, [id])

//   return (
//     <>
//       <div className="flex flex-col sm:border-t sm:border-b sm:divide-y mb-5 sm:mb-8">
//             <div className="py-5 sm:py-8">
//               <div className="flex flex-wrap gap-4 lg:gap-6 sm:py-2.5">
//                 <div className="sm:-my-2.5">
//                   <a href="#" className="group w-24 sm:w-40 h-40 sm:h-56 block bg-gray-100 rounded-lg overflow-hidden relative">
//                     <img src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200" loading="lazy" alt="Photo by Thái An" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
//                   </a>
//                 </div>
//                 <div className="flex flex-col justify-between flex-1">
//                   <div>
//                     <a href="#" className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1"></a>
//                     <span className="block text-gray-500">{cartProducts.name}</span>
//                     <span className="block text-gray-500">Color: White</span>
//                   </div>
//                   <div>
//                     <span className="block text-gray-800 md:text-lg font-bold mb-1">{formatCurrency(cartProducts.price)}</span>

//                     <span className="flex items-center text-gray-500 text-sm gap-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                       </svg>
//                       In stock
//                     </span>
//                   </div>
//                 </div>
//                 <div className="w-full sm:w-auto flex justify-between border-t sm:border-none pt-4 sm:pt-0">
//                   <div className="flex flex-col items-start gap-2">
//                     <div className="w-20 h-12 flex border rounded overflow-hidden">
//                       <p className="w-full focus:ring ring-inset ring-indigo-300 outline-none transition duration-100 px-4 py-2">{quantity}</p>

//                       <div className="flex flex-col border-l divide-y">
//                         <button className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100" onClick={() => increaseCartQuantity(id)}>+</button>
//                         <button className="w-6 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100" onClick={() => decreaseCartQuantity(id)}>-</button>
//                       </div>
//                     </div>
//                     <button className="text-red-500 hover:text-red-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100" onClick={() => removeFromCart(id)}>Delete</button>
//                   </div>
//                   <div className="pt-3 sm:pt-2 ml-4 md:ml-8 lg:ml-16">
//                     <span className="block text-gray-800 md:text-lg font-bold">$15.00</span>
//                   </div>
//                 </div>
//               </div>
//             </div>  
//           </div>
//     </>
//   )
// }

// export default CartProduct
