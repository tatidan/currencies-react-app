import axios from "axios";
import {
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  fetchCurrenciesError,
} from "./currency-actions";

axios.defaults.baseUrl = "https://api.exchangerate.host/latest";

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(fetchCurrenciesRequest());

  try {
    const { data } = await axios.get("/");
    dispatch(fetchCurrenciesSuccess(data));
  } catch (error) {
    dispatch(fetchCurrenciesError(error.message));
  }
};
