import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: 0,
    username: 'default',
    avatar:
      'https://img.freepik.com/premium-vector/empty-face-icon-avatar-with-beard-vector-illustration_601298-13395.jpg',
    isLogged: false,
    cart: [],
  },
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.user.isLogged = true;
      if (!state.user.avatar) {
        state.user.avatar = initialState.user.avatar;
      }
    },

    logoutUser: (state) => {
      state.user = initialState;
    },
  },
});

export const { loginUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;
