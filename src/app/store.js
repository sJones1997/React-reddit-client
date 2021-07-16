import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import searchBarReducer from '../components/searchBar/searchBarSlice';
import FeedReducer from '../components/feed/FeedSlice';
import TileReducer from '../components/tile/tileSlice';

export default configureStore({
    reducer: {
        searchBar: searchBarReducer,
        feedSlice: FeedReducer,
        tileSlice: TileReducer
    }
  }, applyMiddleware);