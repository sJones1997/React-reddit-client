
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSearchResult, selectResults, isLoading, hasError } from './FeedSlice';
import { Tile } from '../tile/Tile';
import './feed.css';

export default function Feed(searchTerm){

    const dispatch = useDispatch();
    let searchResult = useSelector(selectResults);
    let loading = useSelector(isLoading);
    let errored = useSelector(hasError)


    useEffect(() => {
        dispatch(fetchSearchResult({searchTerm}))
    }, [searchTerm, dispatch])

    let content;

    if(loading){

        content = <h2>Loading results...</h2>

    } else if(searchResult.length){

        content = <div className="tileContainer">
        {searchResult.map((e, i) => (
            <Tile key={i} data={e.data} />
        )) }           
        </div>

    } else if (errored || searchResult.length){

        content = <h2>Noting to see here, try something else!</h2> 

    }

    return (
        <div className="feedContainer">
            {content}
        </div>
    )
}