import {GET_WISHLIST, API_CALL_BEGIN, API_CALL_FAILED, ADD_WISHLIST, REMOVE_WISHLIST} from "../actions/actions";

const reducer = (state, action) => {
  // Remove to wishlist
  if (action.type === REMOVE_WISHLIST) {
    const wishlist = state.wishlist.filter(item => item.productId !== action.payload)
    return {...state, wishlist}
  }

  // Add to wishlist

  if (action.type === ADD_WISHLIST) {
    const {wishlist, success, message} = action.payload

    return {...state, wishlist: [...state.wishlist, wishlist], success, message}
  }

  // Api call begin
  if (action.type === API_CALL_BEGIN) {
    return {...state, loading: true}
  }

  // Api call failed
  if (action.type === API_CALL_FAILED) {
    return {...state, loading: false, success: false, message: action.payload}
  }

  // Get Wishlist 
  if(action.type === GET_WISHLIST) {
    const {wishlist, success, message} = action.payload
    return {...state, loading: false, wishlist, success, message}
  }

  // // Api call begin...
  // if (action.type === API_CALL_BEGIN) {
  //   return { ...state, loading: true };
  // }

  // // Api call failed...
  // if (action.type === API_CALL_FAILED) {
  //   return { ...state, loading: false, errors: "Something went wrong!" };
  // }

  // // Get all wishlist...
  // if (action.type === GET_ALL_WISH_LIST) {
  //   return { ...state, loading: false, wishlist: action.payload };
  // }

  // // Add to wishlist
  // if (action.type === ADD_TO_WISH_LIST) {
  //   if (state.wishlist.data) {
  //     return {...state, wishlist: {...state.wishlist, data: [...state.wishlist.data, action.payload]}}
  //   } else {
  //     return {...state, wishlist: {...state.wishlist, data: [action.payload]}}
  //   }
  //   // return {...state, wishlist: {...state.wishlist, data: [...state.wishlist.data, action.payload]}}
  // }

  // // Remove to wishlist item...
  // if (action.type === REMOVE_TO_WISH_LIST) {
  //   // Filtered data...
  //   let tempData = state.wishlist.data.filter((product) => product.id !== action.payload);
  //   let tempWishlist = { ...state.wishlist, data: tempData };

  //   return { ...state, wishlist: tempWishlist };
  // }

  return state;
  // eslint-disable-next-line
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
