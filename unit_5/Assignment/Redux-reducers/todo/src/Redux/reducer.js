import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import todoReducer from "./todo/todo.reducer";

export default combineReducers({
  auth: authReducer,
  todo: todoReducer,
});
