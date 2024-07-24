import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "false",
  postsPublished: {},
  error: "",
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",

  async () => {
    return axios
      .get(
        "https://public-api.wordpress.com/rest/v1.1/sites/desvelandooriente.com/posts",
      )
      .then((response) => response.data.posts);
  },
);

const postsSlice = createSlice({
  name: "postsArray",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.postsPublished = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.postsPublished = [];
      state.error = action.error.message;
    });
  },
});

export default postsSlice.reducer;
