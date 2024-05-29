import { productsTypes } from "../constants/product-types";

export const setProducts = (products) => ({
  type: productsTypes.GET_PRODUCTS,
  payload: products,
});

// export const selectProduct  = (product) => ({
//       type: productsTypes.SELECT_PRODUCT,
//       payload: product,
// })
