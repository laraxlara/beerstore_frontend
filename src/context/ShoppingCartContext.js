import { createContext, useEffect, useReducer } from "react";
import { useProductsContext } from "./ProductsContext";
import { cartReducer, ADD_PRODUCT, REMOVE_PRODUCT, initializer } from "./ShoppingCartReducers";

export const ShoppingCartContext = createContext() 

export function ShoppingCartProvider(props) {
  const { products } = useProductsContext();

  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] }, initializer);

  const addToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeFromCart = (productId) => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  useEffect(() => {
    localStorage.setItem('localCart', JSON.stringify(cartState))
  }, [cartState])

    return (
      <ShoppingCartContext.Provider value={{ products: products, cart: cartState.cart, addToCart: addToCart, removeFromCart: removeFromCart  }}>
          {props.children}
      </ShoppingCartContext.Provider>
    )
}



// export const CartState = ({ ShoppingCartContext }) => {
//   return useContext(ShoppingCartContext);
// };

// const [cartProducts, setCartProducts] = useState([])
    // const [isOpen, setIsOpen] = useState(false)

    // const cartQuantity = cartProducts.reduce(
    //     (quantity, product) => product.quantity + quantity,
    //     0
    // )

    // const openCart = () => setCartProducts(true)
    // const closeCart = () => setCartProducts(false)

    // function addToCart (id) {
    //   setCartProducts(currentProducts => {
    //     if (currentProducts.find(product => product.id === id) == null) {
    //       return [...currentProducts, { id, quantity: 1 }]
    //     }
    //   })
    // }

    // function getItemQuantity(id) {
    //     return cartProducts.find(product => product.id === id)?.quantity || 0
    // }

    // function increaseCartQuantity(id) {
    //     setCartProducts(currentProducts => {
    //       if (currentProducts.find(product => product.id === id) == null) {
    //         return currentProducts.map(product => {
    //           if (product.id === id) {
    //             return { ...product, quantity: product.quantity + 1 }
    //           } else {
    //             return product
    //           }
    //         })
    //       }
    //     })
    //   }

    //   function decreaseCartQuantity(id) {
    //     setCartProducts(currentProducts => {
    //       if (currentProducts.find(product => product.id === id)?.quantity === 1) {
    //         return currentProducts.filter(product => product.id !== id)
    //       } else {
    //         return currentProducts.map(product => {
    //           if (product.id === id) {
    //             return { ...product, quantity: product.quantity - 1 }
    //           } else {
    //             return product
    //           }
    //         })
    //       }
    //     })
    //   }
    //   function removeFromCart(id) {
    //     setCartProducts(currentProducts => {
    //       return currentProducts.filter(product => product.id !== id)
    //     })
    //   }
