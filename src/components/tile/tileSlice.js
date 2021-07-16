import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {baseUrl} from '../../app/App';

export const fetchPostComments = createAsyncThunk(
    'tile/getPostComments',
    async (postObj) => {
        const { id } = postObj;
        const {subreddit} = postObj;
        const queryParams = `/r/${subreddit}/comments/${id}.json`;

        const data = await fetch(baseUrl + queryParams, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const json = await data.json();
        return {id: id, comments: json[1].data.children};
    }
)


const tileSlice = createSlice({
    name:'tile',
    initialState: {
        postComments: {},
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchPostComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPostComments.fulfilled]: (state, action) => {
            if(action.payload.comments.length){
                state.isLoading = false;
                state.hasError = false;
                const {id} = action.payload
                const {comments} = action.payload
                state.postComments[id] = comments
            }
        },
        [fetchPostComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectComments = (state) => state.tileSlice.postComments;
export const isLoading = (state) => state.tileSlice.isLoading;
export const hasError = (state) => state.tileSlice.hasError;

export default tileSlice.reducer;