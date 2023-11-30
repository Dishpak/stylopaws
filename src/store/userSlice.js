import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    avatar:
      'https://img.freepik.com/premium-vector/empty-face-icon-avatar-with-beard-vector-illustration_601298-13395.jpg',
    isLogged: false,
    cart: [],
    featured: [],
  },
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = {
        ...initialState.user,
        id: action.payload.id,
        username: action.payload.username,
        password: action.payload.password,
        isLogged: true,
      };
    },

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

    editUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },

    addFeatured: (state, action) => {
      if (!state.user.featured) {
        state.user.featured = [];
      }
      if (
        state.user.featured.find((item) => item === action.payload) ===
        action.payload
      ) {
        state.user.featured = state.user.featured.filter(
          (item) => item !== action.payload,
        );
      } else {
        state.user.featured.push(action.payload);
      }
      // state.user.featured = action.payload;
      // console.log(action.payload);
    },
  },
});

export const { registerUser, loginUser, logoutUser, editUser, addFeatured } =
  usersSlice.actions;
export default usersSlice.reducer;
