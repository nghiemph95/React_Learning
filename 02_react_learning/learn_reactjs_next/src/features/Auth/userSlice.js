import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'contants/storage-keys';
/** Tạo async action để goi API */

/** Create the thunk */
export const register = createAsyncThunk('user/register', async (payload) => {
  // Call Api to register
  const data = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  // return user data
  return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
  // Call Api to register
  const data = await userApi.login(payload);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  // return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',

  initialState: {
    // lấy thông tin user từ localStorage hoặc nếu ko thì lấy ||
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
  },

  reducers: {},

  extraReducers: {
    /** [register.fulfilled] = 'user/register/fulfilled' là 1 chuỗi */
    [register.fulfilled]: (state, action) => {
      state.current = action.payload; // action.payload là kết quả return trên createThunk
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload; // action.payload là kết quả return trên createThunk
    },
  },
});

/** Action + Reducer */
const { reducer } = userSlice;

export default reducer; // default export
