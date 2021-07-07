import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSearchResult = createAsyncThunk(
    "searchFeed/setSearchResults",
    async (term) => {
        let searchTerm = term.term
        if(searchTerm.length){
            const searchTermSplit = searchTerm.split(" ");
            let baseurl = 'https://www.reddit.com/';
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

            const data = await fetch(baseurl + queryParams, {
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


const searchFeedSlice = createSlice({
    name: 'searchFeed',
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
            state.searchResults = data.children;     
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchSearchResult.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});


export const isLoading = (state) => state.searchFeed.isLoading;
export const selectResults = (state) => state.searchFeed.searchResults;

export default searchFeedSlice.reducer;
