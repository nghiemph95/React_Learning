import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
  },
});

/** Action + Reducer */
const { actions, reducer } = counterSlice;

/** Props action */
export const { increase, decrease } = actions; // Named export

export default reducer; // default export
