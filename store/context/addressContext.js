import React, { useContext, useReducer } from "react";
import reducer from "../reducers/address-reducer";
import {
  API_CALL_BEGIN,
  GET_ALL_ADDRESS_LIST,
  API_CALL_FAILED,
} from "../actions/actions";
import { getCustomerAddress } from "../../lib/api/admin";

const initialState = {
  loading: false,
  address: [],
  message: "",
  error: false,
};

const AddressContext = React.createContext();
export const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get address
  const addToAddressList = async () => {
    dispatch({ type: API_CALL_BEGIN });

    const customerAddressRes = await getCustomerAddress();
    if (customerAddressRes.status === 200) {
      const { data, message, success } = customerAddressRes.data;
      if (success) {
        dispatch({ type: GET_ALL_ADDRESS_LIST, payload: { data, message } });
      } else {
        dispatch({ type: API_CALL_FAILED });
      }
    } else {
      dispatch({ type: API_CALL_FAILED });
    }
  };

  return (
    <AddressContext.Provider value={{ ...state, addToAddressList }}>
      {children}
    </AddressContext.Provider>
  );
};

// make sure use
export const useAddressContext = () => {
  return useContext(AddressContext);
};
