import * as actionTypes from "./types";
import axios from "axios";

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      // to fetch from api
      let response = await axios.get(
        "http://coffee.q8fawazo.me/api/?format=json"
      );
      // to get data from object reponse
      let coffeeShops = response.data;
      //to send to reducer
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeShops
      });
    } catch (error) {
      //incase there is an error
      console.error(error);
      console.log("there is an error ferching the coffeeShops");
    }
  };
};

export const setCoffeeShopsLoading = () => {
  return async dispatch => {
    dispatch({
      type: actionTypes.COFFEESHOPS_LOADING
    });
  };
};
