import {
    CHECKOUT_PENDING,
    CHECKOUT_FULFILLED,
    CHECKOUT_REJECTED,
    DISCOUNT_APPLY
} from '../actions/CheckoutAction';


// INITIALIZE STATE

const initialState = {
    totalAmount: 0
};


// REDUCER

export const CheckoutReducer = (state = initialState, action) => {
    console.log('reducer', state)
    console.log('action', action)
    switch(action.type) {
        case DISCOUNT_APPLY:
        return {
            ...state,
            totalAmount: action.payload
        };
        case CHECKOUT_PENDING:
            return {
                ...state,
                checkoutObj: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case CHECKOUT_FULFILLED:
            return {
                ...state,
                checkoutObj: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case CHECKOUT_REJECTED:
            return {
                ...state,
                checkoutObj: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};