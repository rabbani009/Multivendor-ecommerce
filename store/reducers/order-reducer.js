import {
  API_CALL_FAILED,
  GET_TO_ORDER,
  GET_TO_ORDERS,
} from "../actions/actions";

const reducer = (state, action) => {
  // Api call begin...
  // if (action.type === API_CALL_BEGIN) {
  //   return { ...state, loading: true };
  // }

  // Api call failed...
  if (action.type === API_CALL_FAILED) {
    return { ...state, message: action.payload.message};
  }

  // Get orders...
  if (action.type === GET_TO_ORDERS) {
    const {orders, message} = action.payload
    return {
      ...state,
      orders,
      message
    };
  }

  // Get order...
  // if (action.type === GET_TO_ORDER) {
  //   localStorage.setItem("order", JSON.stringify(action.payload));

  //   return {
  //     ...state,
  //     loading: false,
  //     order: action.payload,
  //     errors: "",
  //   };
  // }

  return state;
  // eslint-disable-next-line
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
