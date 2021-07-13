import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import searchBarReducer from '../features/searchBar/searchBarSlice';
import FeedReducer from '../components/feed/FeedSlice';

export default configureStore({
    reducer: {
        searchBar: searchBarReducer,
        feedSlice: FeedReducer
    }
  }, applyMiddleware);