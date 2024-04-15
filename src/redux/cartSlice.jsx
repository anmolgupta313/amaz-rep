import { createSlice } from "@reduxjs/toolkit";

const cartSlide = createSlice({
  name: "Add_To_Basket",
  initialState: {
    basket: [],
  },
  reducers: {
    addtoCart: (state, action) => {
      state.basket.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const itemId = action.payload;

      state.basket = state.basket.filter((item) => {
        return item.id != itemId;
      });
    },
  },
});

export default cartSlide.reducer;
export const { addtoCart, removeCartItem } = cartSlide.actions;
