import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
    name: 'searchbar',
    initialState: {
        searchResults: []
    },
    reducers: {
        getSearchResult: ( state, action ) => {
            const { searchTerm } = action.payload;
            console.log( searchTerm )
        }
    }
})

export const getSearchResult = ( searchTerm ) => {
    return {
        type: 'searchbar/getsearchresult',
        payload:searchTerm
    }
}

export default searchBarSlice.reducer