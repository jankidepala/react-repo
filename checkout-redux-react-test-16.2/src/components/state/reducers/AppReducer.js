// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchZipCodesReducer } from '../reducers/FetchZipCodesReducer';
import { CheckoutReducer } from '../reducers/CheckoutReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    zipCodes: FetchZipCodesReducer,
    checkOutReduce :CheckoutReducer
});