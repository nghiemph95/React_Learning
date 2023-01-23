import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

/** Create the thunk */
const register = createAsyncThunk('users/register', async (payload, thunkAPI) => {
  // Call Api to register

  // save data to local storage

  // return user data
  return {};
});

const userSlice = createSlice({
  name: 'user',

  initialState: {
    current: {},

    settings: {},
  },

  reducers: {},

  extraReducers: {
    /** [register.fulfilled] = 'user/register/fulfilled' là 1 chuỗi */
    [register.fulfilled]: (state, action) => {
      state.current = action.payload; // action.payload là kết quả return trên createThunk
    },
  },
});

/** Action + Reducer */
const { reducer } = userSlice;

export default reducer; // default export
