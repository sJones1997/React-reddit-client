import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchFullPost, posts, comments, isLoading, hasError } from './fullPostSlice';
import { Tile } from '../../components/tile/Tile';
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

    } else if(pagePost.length && allComments.length){

        content = (
        <div className="fullPostBody">
            {pagePost.map((e,i) => (
                <Tile key={i} data={e.data} />
            ))}
                <div className="commentBody">
                    {allComments.map((e,it) => (
                        <div key={`commentContainer_${it}`} className="commentsContainer">
                            <p className="replyAuthor" >Author: {e.data.author}</p>
                            <p className="replyBody">{e.data.body}</p>
                            <p className="replyScore">Upvotes: {e.data.score}</p>
                            {e.data.replies ? 
                            e.data.replies.data.children.map((e,i) => {
                                if(e.kind === 't1'){
                                    return (
                                        <div key={`commentContainer_${it}_comment_${i}`} className="commentReply" style={{'paddingLeft': 10 * (i + 1), 'borderLeft': '1px solid rgba(33,33,33,0.25)', 'marginLeft': 10 * i}} >
                                            <p className="replyAuthor">Author: {e.data.author}</p>
                                            <p className="replyBody">{e.data.body}</p>
                                            <p className="replyScore">Upvotes: {e.data.score}</p>
                                        </div>
                                    )
                                }
                            })
                            :
                            ''}
                        </div>
                    ))}  
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