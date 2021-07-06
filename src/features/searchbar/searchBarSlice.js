import { createSlice } from "@reduxjs/toolkit";
const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState: {
        searchTerms: []
    },
    reducers: {
        setSearchTerms: ( state, action ) => {
            state.searchTerms = action
        }
    }
})

export const getSearchTerms = (state) => {
    return state.serachBar.searchTerms;
}

export const setSearchTerms = (terms) => {
    let searchTerm = terms.searchTerm
    return {
        type:'searchBar/setSearchTerms', 
        payload:searchTerm
    }
}


export default searchBarSlice.reducer