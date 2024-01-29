import { createSlice } from "@reduxjs/toolkit";

const blogDataSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    blog:[],
    loading: false,
    error: false,
    comments: [],
    categories: [],
    draft:[],
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

    getDataSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state[payload?.url] = payload?.data.result;
    },

    postDataSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state[payload?.blog] = payload?.data;
    },

    getDraftSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.draft = payload;
    }
  },
});

export const {
  getDataSuccess,
  fetchStart,
  fetchFail,
  getDataLikeSuccess,
  postDataSuccess,
  getDraftSuccess,
  getDetilSuccess
} = blogDataSlice.actions;

export default blogDataSlice.reducer;
