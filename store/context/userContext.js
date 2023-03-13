import React, { useContext, useEffect, useState, useReducer } from "react";
import reducer from "../reducers/user-reducer";
import {ADD_TO_LOGIN, REMOVE_TO_USER, UPDATE_TO_USER,} from "../actions/actions";
import { getLocalStorage } from "../../lib/utils/getLocalStorage";

// const getUserFromLocalStorage = () => {
//   let user = typeof window !== "undefined" ? localStorage.getItem("user") : "";
//   if (user) return JSON.parse(localStorage.getItem("user"));
//   else return "";
// };
//
// const getTokenFromLocalStorage = () => {
//   let token =
//     typeof window !== "undefined" ? localStorage.getItem("token") : "";
//   if (token) return JSON.parse(localStorage.getItem("token"));
//   return null;
// };

const initialState = {
  user: getLocalStorage("user"),
  token: getLocalStorage("token"),
  loading: false,
};

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, token } = state;

  const [myUser, setMyUser] = useState(user);
  const [myToken, setMyToken] = useState(token);

  const addToLogin = (user, token) => {
    dispatch({
      type: ADD_TO_LOGIN,
      payload: { user, token },
    });
  };

  const removeToUser = () => {
    dispatch({
      type: REMOVE_TO_USER,
    });
  };

  const updateToUser = (user) => {
    dispatch({
      type: UPDATE_TO_USER,
      payload: user,
    });
  };

  useEffect(() => {
    setMyUser(user);
    setMyToken(token);
  }, [user, token]);

  return (
    <UserContext.Provider
      value={{
        ...state,
        myUser,
        myToken,
        addToLogin,
        removeToUser,
        updateToUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
