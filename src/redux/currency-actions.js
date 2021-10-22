import { createAction } from "@reduxjs/toolkit";

export const fetchCurrenciesRequest = createAction("fetchCurrenciesRequest");
export const fetchCurrenciesSuccess = createAction("fetchCurrenciesSuccess");
export const fetchCurrenciesError = createAction("fetchCurrenciesError");

// export const addCurrencyRequest = createAction("addCurrencyRequest");
// export const addCurrencySuccess = createAction("addCurrencySuccess");
// export const addCurrencyError = createAction("addCurrencyError");

// export const removeCurrencyRequest = createAction("removeCurrencyRequest");
// export const removeCurrencySuccess = createAction("removeCurrencySuccess");
// export const removeCurrencyError = createAction("removeCurrencyError");

export const onSearchFilter = createAction("searchFilter");
