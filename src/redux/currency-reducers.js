import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCurrenciesRequest,
  fetchCurrenciesSuccess,
  fetchCurrenciesError,
  onSearchFilter,
} from "./currency-actions";

const currencies = createReducer([], {
  [fetchCurrenciesSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchCurrenciesRequest]: () => true,
  [fetchCurrenciesSuccess]: () => false,
  [fetchCurrenciesError]: () => false,
});

const filter = createReducer("", {
  [onSearchFilter]: (_, action) => action.payload,
});

const error = createReducer("", {
  [fetchCurrenciesRequest]: (_, __) => "",
  [fetchCurrenciesError]: (_, action) => action.payload,
});

const rootReducer = combineReducers({
  currencies,
  filter,
  loading,
  error,
});

export default rootReducer;
