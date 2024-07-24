import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchPosts } from './postsSlice';


const initialState ={

    loading: false,
    lastPostPublished: {},
    error: ""
}

export const fetchLastPost = createAsyncThunk(
    "posts/fechLastPost",

    async() =>{
        return axios.get(
            "https://public-api.wordpress.com/rest/v1.1/sites/desvelandooriente.com/posts?page=1&number=1"
        )
        .then((response) => response.data.posts[0])
    }
);

const lastPostSlice = createSlice({
    name: "lastPost",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchLastPost.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchLastPost.fulfilled, (state, action) => {
            state.loading = false;
            state.lastPostPublished = action.payload;
            state.error="";
        });
        builder.addCase(fetchPosts.rejected, (state, action) =>{
            state.loading = "false";
            state.lastPostPublished = {};
            state.error = action.error.message;
        })
    }
});

export default lastPostSlice.reducer;