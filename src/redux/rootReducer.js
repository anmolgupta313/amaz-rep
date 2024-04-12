import { combineReducers } from "redux";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";

const rootReducer= combineReducers({
basket:cartSlice,
user:userSlice
})



export default rootReducer