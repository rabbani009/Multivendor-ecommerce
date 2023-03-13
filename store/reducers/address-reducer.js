import {
  API_CALL_BEGIN,
  API_CALL_FAILED,
  GET_ALL_ADDRESS_LIST,
} from "../actions/actions";

const reducer = (state, action) => {
  if (action.type === API_CALL_BEGIN) {
    return { ...state, loading: true, message: "", error: false };
  }

  if (action.type === GET_ALL_ADDRESS_LIST) {
    const { data, message } = action.payload;
    return { ...state, loading: false, address: data.data, message, error: false };
  }

  if (action.type === API_CALL_FAILED) {
    return { ...state, loading: false, message: "something went wrong", error: true };
  }

  return state;
  // eslint-disable-next-line
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
