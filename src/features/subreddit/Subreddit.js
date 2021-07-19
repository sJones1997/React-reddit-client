import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubreddit, posts, isLoading, hasError } from './subredditSlice';
import { Tile } from '../../components/tile/Tile';
import './subreddit.css'

export default function Subreddit(match){

    const dispatch = useDispatch();
    const subPosts = useSelector(posts);
    const loading = useSelector(isLoading);
    const errored = useSelector(hasError);

    useEffect(() => {
        const param = match.match.params
        dispatch(fetchSubreddit(param));
    }, [dispatch,match])


    return (
        <div>
            {!loading && !errored ?  
            <div className="subredditPostContainer">
            { subPosts.map((e,i) => (
                <Tile key={i} data={e.data} />
            ))}                
            </div>
            : 
            <h1>Test</h1>}
        </div>
    )
}