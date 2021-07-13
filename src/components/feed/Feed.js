
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSearchResult, selectResults, isLoading } from './FeedSlice';
import { Tile } from '../tile/Tile';
import './feed.css';

export default function Feed(searchTerm){

    const dispatch = useDispatch();
    let searchResult = useSelector(selectResults);
    let loading = useSelector(isLoading);


    useEffect(() => {
        dispatch(fetchSearchResult({searchTerm}))
    }, [searchTerm, dispatch])


    return (
        <div>
            {loading === false ?
                <div className="tileContainer">
                    {searchResult.map((e, i) => (
                        <Tile key={i} data={e.data} />
                    ))}
                </div> :
                <div className="loadingContainer">
                    <h2>Loading results...</h2>
                </div>
            }
        </div>
    )
}