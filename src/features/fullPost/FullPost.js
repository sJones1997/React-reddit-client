import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchFullPost, posts, comments } from './fullPostSlice';

export default function FullPost(match){

    const dispatch = useDispatch();
    const pagePost = useSelector(posts);
    const allComments = useSelector(comments);

    useEffect(() => {
        const { id } = match.match.params;
        const { subreddit } = match.match.params;
        dispatch(fetchFullPost({id:id, subreddit:subreddit}))
    }, [dispatch, match])

    return (
        <h1>{console.log(pagePost)}</h1>
    )
}