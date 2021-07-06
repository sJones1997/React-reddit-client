import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import searchBarReducer from '../features/searchBar/searchBarSlice';
import searchFeedReducer from '../features/searchFeed/searchFeedSlice';

export default configureStore({
    reducer: {
        searchBar: searchBarReducer,
        searchFeed: searchFeedReducer
    }
  }, applyMiddleware);