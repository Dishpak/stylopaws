import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: 0,
      username: 'default',
      avatar: 'https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg',
    }
  },
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  }
})

export const {loginUser, logoutUser} = usersSlice.actions;
export default usersSlice.reducer;
