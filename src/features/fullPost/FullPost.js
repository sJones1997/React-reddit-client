import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchFullPost, posts, comments, isLoading, hasError } from './fullPostSlice';
import { Tile } from '../../components/tile/Tile';
export default function FullPost(match){

    const dispatch = useDispatch();
    const pagePost = Array.from(useSelector(posts));
    const allComments = useSelector(comments);
    const loading = useSelector(isLoading);
    const errored = useSelector(hasError);

    useEffect(() => {
        const { id } = match.match.params;
        const { subreddit } = match.match.params;
        dispatch(fetchFullPost({id:id, subreddit:subreddit}))   
    }, [dispatch, match])

    return (
        <div>
           {!loading && !errored ? console.log(pagePost[0].data) : <h1>Help!</h1>}
        </div>
    )
}