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

    let content;

    if(loading){

        content = <h2>Loading results...</h2>

    } else if(subPosts.length){

        content = <div className="subredditPostContainer">
        {subPosts.map((e,i) => (
            <Tile key={i} data={e.data} />
        ))}                
        </div>

    } else if (errored || !subPosts.length){

        content = <h2>Noting to see here, try something else!</h2> 

    }    


    return (
        <div className="subredditContainer">
            {content}
        </div>
    )
}