import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
    name: 'searchbar',
    initialState: {
        searchResults: []
    },
    reducers: {
        fetchSearchResult: ( state, action ) => {
            const {data} = action.payload;
            state.searchResults = data.children;
        }
    }
})

export const getSearchResults = () => {
    
}

export const fetchSearchResult = (term) => {
    return async (dispatch, getState) => {
        let searchTerm = term.searchTerm;
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
            dispatch({type:'searchbar/fetchSearchResult', payload:json});

        }
    }
}


export default searchBarSlice.reducer