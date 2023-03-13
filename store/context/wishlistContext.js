import React, { useContext, useReducer } from "react";

import reducer from "../reducers/wishlist-reducer";
import { API_CALL_BEGIN, GET_WISHLIST, API_CALL_FAILED, ADD_WISHLIST, REMOVE_WISHLIST } from "../actions/actions";
import { getWishlist, addWishlist } from "../../lib/api/wish-list";
// import { getWishlist, remove } from "../../lib/api/wish-list";

const initialState = {
  loading: false,
  wishlist: [],
  success: false,
  message: ""
};

const WishlistContext = React.createContext();

export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Remove to wishlist
  const removeToWishlist = (productId) => {
    dispatch({
      type: REMOVE_WISHLIST,
      payload: productId
    })
  }

  // Add to wishlist
  const addToWishlist = (wishlist, success, message) => {
    // console.log(`Check addToWishlist wishlist: ${wishlist}`)
    // console.log(`Check addToWishlist success: ${success}`)
    // console.log(`Check addToWishlist message: ${message}`)

    if (success) {
      dispatch({
        type: ADD_WISHLIST,
        payload: {wishlist, success, message}
      })
    } else {
        dispatch({type: API_CALL_FAILED, payload: message})
    }
    // const addWishlistRes = await addWishlist(token, productId)
    // if (addWishlistRes.status === 200) {
    //   const {data, success, message} = addWishlistRes.data
    //   dispatch({
    //     type: ADD_WISHLIST,
    //     payload: {wishlist: data, success, message}
    //   })
    // } else {
    //   dispatch({type: API_CALL_FAILED, payload: addWishlistRes.message})
    // }

  }

  // Get wishlist
  const getToWishlist = async (token) => {
    dispatch({type: API_CALL_BEGIN})
      const getWishlistRes = await getWishlist(token)
      if (getWishlistRes.status === 200) {
        const {data, success, message} = getWishlistRes.data

        dispatch({
          type: GET_WISHLIST,
          payload: {wishlist: data, success, message}
        })
      } else {
        dispatch({type: API_CALL_FAILED, payload: getWishlistRes.message})
      }
  }

  // ADD TO WISHLIST...
  // const addToWishList = (wishList) => {
  //   dispatch({
  //     type: ADD_TO_WISH_LIST,
  //     payload: wishList,
  //   });
  // };

  // Get all wish list...
  // const getToAllWishList = async (myToken) => {
  //   // Loading =>
  //   dispatch({ type: API_CALL_BEGIN });

  //   // Get all wishlist api call...
  //   const wishlistRes = await getWishlist(myToken);
  //   if (wishlistRes.status === 200) {
  //     const { data, success } = wishlistRes.data;
  //     if (success) {
  //       console.log('check data...', data)
  //       // dispatch({ type: GET_ALL_WISH_LIST, payload: data });
  //     } else {
  //       dispatch({ type: API_CALL_FAILED });
  //     }
  //   } else {
  //     dispatch({ type: API_CALL_FAILED });
  //   }
  // };

  // Remove to wishlist
  // const removeToWishlist = async (id) => {
  //   dispatch({ type: REMOVE_TO_WISH_LIST, payload: id });
  // };

  return (
    <WishlistContext.Provider
      value={{ ...state, getToWishlist, addToWishlist, removeToWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// make sure use
export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
