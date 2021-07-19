import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {baseUrl} from '../../app/App';

export const fetchSubreddit = createAsyncThunk(
    'subreddit/getSubreddit',
    async (subredditObj) => {

        const {subreddit} = subredditObj;
        const queryParams = `/r/${subreddit}.json`;

        const data = await fetch(baseUrl + queryParams, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await data.json();
        return json;

    }
)

const subredditSlice = createSlice({
    name: 'subreddit',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchSubreddit.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSubreddit.fulfilled]: (state,action) => {
            state.hasError = false;
            state.isLoading = false;
            console.log(action.payload.data.children)
            state.posts = action.payload.data.children
        },
        [fetchSubreddit.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const posts = (state) => state.subredditSlice.posts;
export const isLoading = (state) => state.subredditSlice.isLoading;
export const hasError = (state) => state.subredditSlice.hasError;

export default subredditSlice.reducer;