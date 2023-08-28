import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("addtocart");
      return [...data, action.data];
    case REMOVE_FROM_CART:
      data.length = data.length ? data.length - 1: [];
      return [...data];
    case EMPTY_CART:
        data=[]
      return [...data];
    default:
      return [];
  }
};
