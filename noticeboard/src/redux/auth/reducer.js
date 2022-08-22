import { getItemFromLocal } from "../../utils/localStorage";
import {SET_LOGIN_RESPONSE,REMOVE_LOGIN_RESPONSE} from "./actionTypes"

const initState = {
  token: getItemFromLocal("token") || false,
  user: getItemFromLocal("user") || {},
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN_RESPONSE:
      return { ...state, token: payload.token, user: payload.user };
    case REMOVE_LOGIN_RESPONSE:
      return { ...state, token: false, user: {} };
    default:
      return state;
  }
};
