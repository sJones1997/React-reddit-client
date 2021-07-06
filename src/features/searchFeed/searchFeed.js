import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSearchResult, selectResults } from './searchFeedSlice';
export default function SearchFeed(match){
    
    const dispatch = useDispatch();

    const result = useSelector(selectResults)

    useEffect(() => {
        dispatch(fetchSearchResult(match.match.params))
    }, [])

    return (
        <div>
            {result.map(e => (console.log(e.data)))}
        </div>
    )
}