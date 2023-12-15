import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

//JSON.parse ==> the process of converting a JSON object in text format to a Javascript object that can be used inside a program
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
  },
});
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
