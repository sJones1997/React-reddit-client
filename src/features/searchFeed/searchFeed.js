import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSearchResult, selectResults, isLoading } from './searchFeedSlice';
import { Tile } from '../../components/tile/Tile';
import './searchFeed.css';

export default function SearchFeed(match){
    
    const dispatch = useDispatch();
    let searchResult = useSelector(selectResults)
    let loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(fetchSearchResult(match.match.params))
    }, [match, dispatch])

    return (
        <div className="searchResultsContainer">
            {loading === false ?
                <div className="tileContainer">
                    {searchResult.map((e, i) => (
                        <Tile key={i} data={e} />
                    ))}
                </div> :
                <div className="loadingContainer">
                    <h2>Loading results...</h2>
                </div>
            }
        </div>
    )
}