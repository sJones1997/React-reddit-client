import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {baseUrl} from '../../app/App';

export const fetchSearchResult = createAsyncThunk(
    "Feed/setSearchResults",
    async (term) => {
        let searchTerm = term.searchTerm.term
        if(searchTerm.length){
            const searchTermSplit = searchTerm.split(" ");
            let queryParams;

            if(searchTermSplit.length === 1){

                queryParams = `r/${searchTerm}.json`

            } else {

                let params = `q=${searchTermSplit[0]}`;
                for(let i = 1; i < searchTermSplit.length; i++){
                    params+=`%20${searchTermSplit[i]}`
                }
                queryParams = `search.json?${params}`;

            }

            const data = await fetch(baseUrl + queryParams, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            const json = await data.json()

            return json

        }        
    }   
)


const feedSlice = createSlice({
    name: 'Feed',
    initialState: {
        searchResults: [],
        isLoading: false,
        hasError: false
    },
    reducers: {
    },
    extraReducers: {
        [fetchSearchResult.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSearchResult.fulfilled]: (state,action) => {
            const {data} = action.payload;
            if(data) {
                state.searchResults = data.children;     
                state.isLoading = false;
                state.hasError = false;
            } else {
                state.searchResults = [];     
                state.isLoading = false;
                state.hasError = true;                
            }

        },
        [fetchSearchResult.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});


export const isLoading = (state) =>  state.feedSlice.isLoading;
export const selectResults = (state) => state.feedSlice.searchResults;
export const hasError = (state) => state.feedSlice.hasError;

export default feedSlice.reducer;
