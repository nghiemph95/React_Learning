import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
import createReducer from '../features/Cart/cartSlice';

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: createReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
