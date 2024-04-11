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

  },
});


export default cartSlide.reducer
export const { addtoCart } = cartSlide.actions;




