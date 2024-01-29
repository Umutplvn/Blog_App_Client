import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: false,
    currentUser: null,
    token: null,
    userId: null,
    avatar: "",
    user: [],
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.currentUser = payload?.data?.user?.username;
      state.token = payload?.data?.Token;
      state.userId = payload?.data?.user?._id;
      state.avatar = payload?.data?.user?.image;
      state.user = payload?.data?.user;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.currentUser = null;
      state.token = null;
      state.userId = null;
      state.user = [];
      state.avatar = "";
    },

    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.currentUser = payload?.username;
      state.token = payload?.token;
      state.userId = payload?._id;
      state.avatar = payload?.image;
      state.user = payload;
    },

    passwordUpdateSuccess:(state, {payload})=>{
      state.loading = false;
      state.error = false;
      state.user.password = payload?.data?.newData?.password;

    }
  },
});

export const {
  fetchStart,
  fetchFail,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  passwordUpdateSuccess
} = authSlice.actions;

export default authSlice.reducer;
