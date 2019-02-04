

export const CHECKOUT = 'FETCH_CHECKOUT';
export const DISCOUNT_APPLY = 'DISCOUNT_APPLY';

// ACTION GENERATORS

export const applyDiscountAction = (price, isApplied) => ({
    type: DISCOUNT_APPLY,
    payload: isApplied ? price*.90 : price
  });

const CheckoutAction = () => ({
    type: FETCH_ZIPCODES,
    payload: [pay]
});


export { CheckoutAction as checkout };