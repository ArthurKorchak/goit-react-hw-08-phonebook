import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { itemsReducer } from './itemsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from "./authSlice";

const rootReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
