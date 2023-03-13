import {
  ADD_TO_LOGIN,
  REMOVE_TO_USER,
  UPDATE_TO_USER,
} from "../actions/actions";

const reducer = (state, action) => {
  if (action.type === ADD_TO_LOGIN) {
    const { user, token } = action.payload;
    return { ...state, user, token };
  }

  if (action.type === REMOVE_TO_USER) {
    return { ...state, user: "", token: null };
  }

  if (action.type === UPDATE_TO_USER) {
    return { ...state, user: action.payload };
  }

  return state;
  // eslint-disable-next-line
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
