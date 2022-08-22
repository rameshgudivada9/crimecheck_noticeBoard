import axios from "axios";
import { SET_POSTER_DATA } from "./actionTypes";

export const setPosterData = (payload) => {
  return { type: SET_POSTER_DATA, payload };
};

export const getPosterData = (payload) => async (dispatch) => {
  try {
    let res = await axios.get("/api/v1/poster");

    dispatch(setPosterData(res.data));
  } catch (err) {
    console.log(err.response.data);
  }
};

export const postPosterData = (payload) => async (dispatch) => {
    console.log(payload)
    try {

      let res = await axios.post(`/api/v1/poster/${payload.userId}`,payload);
  

      dispatch(getPosterData());
    } catch (err) {
      console.log(err.response.data);
    }
  };