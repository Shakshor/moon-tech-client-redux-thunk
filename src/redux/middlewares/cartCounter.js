import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
  // get the current state from state
  const state = store.getState();
  console.log(action);

  // get the cart
  const cart = state.product.cart;

  // console.log(cart);

  // console.log("current state", store.getState());
  // console.log("action", action);
  if (action?.type === ADD_TO_CART) {
    const newAction = {
      ...action,
      payload: { ...action.payload, cartPosition: cart.length },
    };
    return next(newAction);
  }
  return next(action);
};

export default cartCounter;
