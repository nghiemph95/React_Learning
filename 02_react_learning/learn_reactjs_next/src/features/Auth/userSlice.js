import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
/** Tạo async action để goi API */

/** Create the thunk */
export const register = createAsyncThunk('users/register', async (payload, thunkAPI) => {
  // Call Api to register
  const data = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  // return user data
  return data.user;
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
