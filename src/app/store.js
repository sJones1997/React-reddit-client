import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import searchBarReducer from '../components/searchBar/searchBarSlice';
import FeedReducer from '../components/feed/FeedSlice';
import TileReducer from '../components/tile/tileSlice';
import FullPostReducer from '../features/fullPost/fullPostSlice';
import SubredditReducer from '../features/subreddit/subredditSlice';

export default configureStore({
    reducer: {
        searchBar: searchBarReducer,
        feedSlice: FeedReducer,
        tileSlice: TileReducer,
        fullPostSlice: FullPostReducer,
        subredditSlice: SubredditReducer
    }
  }, applyMiddleware);