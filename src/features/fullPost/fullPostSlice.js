import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findAllByTestId } from '@testing-library/dom';
import {baseUrl} from '../../app/App';

export const fetchFullPost = createAsyncThunk(
    'fullPost/getFullPost',
    async (fullPostObj) => {
        const { id } = fullPostObj;
        const {subreddit} = fullPostObj;
        const queryParams = `/r/${subreddit}/comments/${id}.json`;

        const data = await fetch(baseUrl + queryParams, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await data.json();
        return json
    }
)

const fullPostSlice = createSlice({
    name: 'fullPost',
    initialState: {
        post: {},
        comments: [],
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchFullPost.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchFullPost.fulfilled]: (state, action) => {
            if(action.payload.length === 2){
                state.hasError = false
                state.isLoading = false;
                console.log(typeof(action.payload[1].data.children))
                state.post = action.payload[0].data.children
                state.comments = action.payload[1].data.children
            } else {
                state.hasError = true
            }
        },
        [fetchFullPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const posts = (state) => state.fullPostSlice.post;
export const comments = (state) => state.fullPostSlice.comments;
export const isLoading = (state) => state.fullPostSlice.isLoading;
export const hasError = (state) => state.fullPostSlice.hasError;

export default fullPostSlice.reducer;
