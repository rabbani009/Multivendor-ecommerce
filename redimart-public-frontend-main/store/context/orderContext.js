import React, { useContext, useReducer } from "react";
import reducer from "../reducers/order-reducer";
// import { getOrderStatus, getOrder } from "../../lib/api/orders";
import { API_CALL_FAILED, GET_TO_ORDERS } from "../actions/actions";
// import { getLocalStorage } from "../../lib/utils/getLocalStorage";

// const getLocalStorage = () => {
//   let order =
//     typeof window !== "undefined" ? localStorage.getItem("order") : "";
//   if (order) {
//     return JSON.parse(localStorage.getItem("order"));
//   }
// };

const initialState = {
  orders: [],
  message: ''
};

const OrderContext = React.createContext();

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Add to orders
  const getToOrders = (orders, success, message) => {
    // dispatch({type: API_CALL_BEGIN})
    if (!success) {
      dispatch({type: API_CALL_FAILED, payload: {message}})
    } else dispatch({ type: GET_TO_ORDERS, payload: {orders, success, message} })
    // console.log(`orders: ${orders}, success: ${success}, message: ${message}`)
  }

  // const addToPendingOrders = async (key) => {
  //   dispatch({ type: API_CALL_BEGIN });
  //   const pendingOrdersRes = await getOrderStatus(key);
  //   if (pendingOrdersRes.status === 200) {
  //     const { data, success } = pendingOrdersRes.data;
  //     if (success) {
  //       dispatch({ type: GET_TO_ORDERS, payload: data });
  //     } else {
  //       dispatch({ type: API_CALL_FAILED });
  //     }
  //   } else {
  //     dispatch({ type: API_CALL_FAILED });
  //   }
  // };

  // Add to single order
  // const addToOrder = async (orderId) => {
  //   dispatch({ type: API_CALL_BEGIN });
  //   const orderRes = await getOrder(orderId);
  //   if (orderRes.status === 200) {
  //     const { data, success } = orderRes.data;
  //     if (success) {
  //       dispatch({ type: GET_TO_ORDER, payload: data });
  //     } else {
  //       dispatch({ type: API_CALL_FAILED });
  //     }
  //   } else {
  //     dispatch({ type: API_CALL_FAILED });
  //   }
  // };

  return (
    <OrderContext.Provider value={{ ...state, getToOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

// make sure use
export const useOrderContext = () => {
  return useContext(OrderContext);
};
