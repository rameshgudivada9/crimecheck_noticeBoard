import { SET_POSTER_DATA } from "./actionTypes";

const initState = {
  posterData:[]
};

export const homePageReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_POSTER_DATA:return {...state,posterData:payload}
    default:
      return state;
  }
};
