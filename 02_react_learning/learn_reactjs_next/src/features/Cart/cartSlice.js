import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [],
  },
  reducers: {
    showMiniCart(state, action) {
      state.showMiniCart = true;
    },
    hideMiniCart(state, action) {
      state.showMiniCart = false;
    },
  },
});

/** Action + Reducer */
const { actions, reducer } = cartSlice;

/** Props action */
export const { showMiniCart, hideMiniCart } = actions; // Named export

export default reducer; // default export
