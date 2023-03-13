import React, { useContext, useReducer, useEffect } from "react";
import { ADD_TO_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, CLEAR_CART, TOGGLE_CART_ITEM_AMOUNT } from '../actions/actions'

import reducer from "../reducers/cart-reducer";
import { getLocalStorage } from "../../lib/utils/getLocalStorage";

// const getLocalStorage = () => {
//   let cart = typeof window !== "undefined" ? localStorage.getItem("cart") : "";
//   if (cart) {
//     return JSON.parse(localStorage.getItem("cart"));
//   }
// };

// const initialState = {
//   loading: false,
//   cart: getLocalStorage("cart"),
//   total: 0,
// };

// InitialState ==>
const initialState = {
  cart: getLocalStorage("cart") || [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 35,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // addToCart
  const addToCart = (productId, skuId, title, price, quantity, image, select, totalItem) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { productId, skuId, title, price, quantity, image, select, totalItem },
    });
  };

  // remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  // ADD TO CART
  // const addToCart = async () => {
  //   dispatch({
  //     type: ADD_TO_CART,
  //   });
  // };

  // REMOVE TO CART
  // const removeToCart = async (packageId, id, myToken) => {
  //   // Cart item remove actions...
  //   dispatch({
  //     type: REMOVE_CART,
  //     payload: { packageId, id },
  //   });
  //   // Cart item delete api call...
  //   const deleteRes = await deleteCart(id, myToken);
  //   if (deleteRes.status === 200) {
  //     deleteRes.data;
  //   } else {
  //     // Cart all api call...
  //     const cartAllRes = await getCartAll(myToken);
  //     if (cartAllRes.status === 200) {
  //       const { data } = cartAllRes.data;
  //       dispatch({ type: REMOVE_CART_FAILED, payload: { cart: data } });
  //     }
  //   }
  // };

  // CART TOTALS
  // const getToCartTotals = async (_token) => {
  //   try {
  //     if (_token) {
  //       const cartTotalRes = await cartCount(_token);
  //       if (cartTotalRes.status === 200) {
  //         const { data, success } = cartTotalRes.data;
  //         if (success) {
  //           dispatch({ type: GET_ALL_CART_COUNT, payload: data });
  //         }
  //       } else {
  //         dispatch({ type: GET_TOTAL_COUNT_FAILED });
  //         localStorage.clear();
  //       }
  //     } else {
  //       dispatch({ type: GET_TOTAL_COUNT_FAILED });
  //     }
  //   } catch (ex) {
  //     dispatch({ type: GET_TOTAL_COUNT_FAILED });
  //   }
  // };

  // Get all cart...
  // const getToCartAll = async (_token) => {
  //   dispatch({ type: GET_ALL_CART_BEGIN });
  //   // Cart all api call...
  //   const cartAllRes = await getCartAll(_token);
  //   if (cartAllRes.status === 200) {
  //     const { success, data } = cartAllRes.data;
  //     localStorage.setItem("cart", JSON.stringify(data));

  //     if (success) {
  //       dispatch({
  //         type: GET_ALL_CART_SUCCESS,
  //         payload: { cart: data },
  //       });
  //     } else {
  //       dispatch({ type: GET_ALL_CART_ERROR });
  //     }
  //   } else {
  //     dispatch({ type: GET_ALL_CART_ERROR });
  //   }
  // };

  // Add to pay...
  // const addToPay = () => {
  //   dispatch({ type: ADD_TO_PAY });
  // };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{...state, addToCart, removeItem, clearCart, toggleAmount}}
    >
      {children}
    </CartContext.Provider>
  );
};

// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
