import axios from "axios";
import { setItemToLocal } from "../../utils/localStorage";
import {POST_LOGIN_DATA, SET_LOGIN_RESPONSE} from "./actionTypes";

export const setLoginResponse = (payload) => {
  return { type: SET_LOGIN_RESPONSE, payload };
};

export const postLoginData = (payload) => async (dispatch) => {
  try {
    let res = await axios.post("/api/v1/user/create",{...payload[0]});

    dispatch(setLoginResponse(res.data.user));
    setItemToLocal("user",res.data.user);
    setItemToLocal("token",res.data.user._id);
    console.log(res.data)
payload[1]("/home")
  } catch (err) {
    console.log(err.response.data);
  }
};

