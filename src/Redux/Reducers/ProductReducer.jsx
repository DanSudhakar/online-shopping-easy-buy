import { ActionsTypes } from "../Constants/ActionTypes";

const initialState = {
  products: [],
  product: {},
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionsTypes.SELECTED_PRODUCT:
      return { ...state, product: action.payload };
    case ActionsTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, product: {} };
    default:
      return state;
  }
};
