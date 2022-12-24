/** Redux async thunk giúp tạo ra các async action
 * về bản chất, nó sử dụng 1 middleware là Redux Thunk
 */

/** Demo */

/** 1. Tạo thunk */
const fetchUserById = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

/** 2. Handle action */
const usersSlice = createSlice({
  name: "users",
  initialState: { entities: [], loading: "idle" },
  reducer: {
    /** Đây là reducer tiêu chuẩn, hàm đc viết vô đây sẽ
     * tự động generate action type tương ứng
     */
  },
  extraReducers: {
    /** Tự định nghĩa để nó biết đc nó là action type gì*/
    [fetchUserById.fulfilled]: (state, action) => {
      // Add user to the state array
      /** Cập nhật state */
      state.entities.push(action.payload);
    },
  },
});
