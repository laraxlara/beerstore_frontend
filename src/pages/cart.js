// import React, { useState, useEffect ,useContext } from 'react'
// import {useParams} from "react-router-dom"
// import { displayProducts } from '../api/products'
// import Layout from '../components/layout'
// import CartProduct from '../components/CartProduct'
// import { formatCurrency } from '../utilities/formatCurrency'
// import { ProductsContext } from '../context/ProductsContext'
// import { ShoppingCartContext } from '../context/ShoppingCartContext'

// const Cart = (props) => {
//   const { cart } = useContext(ShoppingCartContext)

//   useEffect(() => {
//     console.log(cart);
//   }, [cart]);
  
//   return (
//     <>
//       <Layout>
//         <div className="bg-white py-6 sm:py-8 lg:py-12">
//           <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
//             <div className="mb-6 sm:mb-10 lg:mb-16">
//               <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Your Cart</h2>
//             </div>

//             {cart.map((product) => {
//                 <li key={product.id}>
//                   <p>{product.name}</p>
//                 </li>
//               })}
            
//             <div className="flex flex-col items-end gap-4">
//               <div className="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
//                 <div className="space-y-1">
//                   <div className="flex justify-between text-gray-500 gap-4">
//                     <span>Subtotal</span>
//                     <span>$129.99</span>
//                   </div>
//                   <div className="flex justify-between text-gray-500 gap-4">
//                     <span>Shipping</span>
//                     <span >$4.99</span>
//                   </div>
//                 </div>
//                 <div className="border-t pt-4 mt-4">
//                   <div className="flex justify-between items-start text-gray-800 gap-4">
//                     <span className="text-lg font-bold">Total</span>
//                     <span className="flex flex-col items-end">
//                       <span className="text-lg font-bold">$134.98 USD</span>
//                       <span className="text-gray-500 text-sm">including VAT</span>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <button className="inline-block bg-orange-600 hover:bg-orange-500 active:bg-orange-500 focus-visible:ring ring-orange-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Check out</button>
//             </div>
//           </div>
//         </div>         
//       </Layout>
//     </>
//   )
// }

// export default Cart
