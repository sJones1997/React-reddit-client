import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchFullPost, posts, comments, isLoading, hasError } from './fullPostSlice';
import { Tile } from '../../components/tile/Tile';
import Comments from '../../components/comments/Comments';
import './fullPost.css';

export default function FullPost(match){

    const dispatch = useDispatch();
    const pagePost = useSelector(posts);
    const allComments = useSelector(comments);
    const loading = useSelector(isLoading);
    const errored = useSelector(hasError);

    useEffect(() => {
        const { id } = match.match.params;
        const { subreddit } = match.match.params;
        dispatch(fetchFullPost({id:id, subreddit:subreddit}))   
    }, [dispatch, match])

    let content;

    if(loading){

        content = <h2>Loading results...</h2>

    } else if(pagePost.length || allComments.length){

        content = (
        <div className="fullPostBody">
            {pagePost.length ? pagePost.map((e,i) => (<Tile key={i} data={e.data} />)) : <h1>Error showing post</h1>}
                <div className="commentBody">
                    {allComments.length ? allComments.map((e, i) => (<Comments key={`commentContainer_${i}`} data={e.data} />)) : <h3 style={{'textAlign': 'center'}}>No comments to show</h3> }
                </div>              
        </div>            
        )

    } else if (errored || !pagePost.length){

        content = <h2>Noting to see here, try something else!</h2> 
    }


    return (
        <div className="fullPostContainer">
           {content}
        </div>
    )
}