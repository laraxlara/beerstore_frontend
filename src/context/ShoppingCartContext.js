import { createContext, useReducer } from "react";
import { useProductsContext } from "./ProductsContext";
import { cartReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./ShoppingCartReducers";

export const ShoppingCartContext = createContext() 

export function ShoppingCartProvider(props) {
  const { products } = useProductsContext();

  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const addToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeFromCart = (productId) => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

    return (
      <ShoppingCartContext.Provider value={{ products: products, cart: cartState.cart, addToCart: addToCart, removeFromCart: removeFromCart  }}>
          {props.children}
      </ShoppingCartContext.Provider>
    )
}
