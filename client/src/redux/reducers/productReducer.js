import { productsTypes } from "../constants/product-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "title 1",
      price: "body 1",
      description: "Hello World",
    },
  ],
};
export const productReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case productsTypes.GET_PRODUCTS:
      return action.payload;
    case productsTypes.SELECT_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
