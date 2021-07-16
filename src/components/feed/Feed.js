
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


    return (
        <div>
            {loading === false || errored !== false ?
                <div className="tileContainer">
                    {searchResult.map((e, i) => (
                        <Tile key={i} data={e.data} />
                    ))}
                </div> :
                <div className="loadingContainer">
                    {console.log(loading, errored)}
                    {loading === true ? <h2>Loading results...</h2> : ''}
                    {errored === true ? <h2>Oops, try something else!</h2> : ''}
                </div>
            }
        </div>
    )
}