import { createSlice } from "@reduxjs/toolkit";


export const userSlide = createSlice({
    name: "Add_User",
    initialState: {
      user: "",
    },
    reducers: {
     addUser: (state, action) => {
      state.user = action.payload;
    },
    },
  });
  export default userSlide.reducer;
  
  export const {addUser}= userSlide.actions