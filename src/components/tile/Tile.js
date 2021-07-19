import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import './tile.css'
import { useEffect } from 'react';
import { fetchPostComments, isLoading, selectComments } from './tileSlice';

export function Tile({ data }){

    const dispatch = useDispatch();

    const comments = useSelector(selectComments)
    const loading = useSelector(isLoading)
    const history = useHistory();    

    useEffect(() => {
        dispatch(fetchPostComments({id: data.id, subreddit:data.subreddit}))
    },[dispatch, data])

    const fixImageEncoding = (imageUrl) => {
        let imageUrlSplit = imageUrl.split("&amp;")
        imageUrl = imageUrlSplit.join("&");
        return imageUrl;
    }

    const renderSubredditLink = (subreddit) => {
        if(subreddit){
            history.push(`/r/${subreddit}`)            
        }
    }

    const formatUpVotes = (votes) => {
        let votesDigits = votes.toString();
        if(votesDigits.length >= 4){
            let votesSplit = votesDigits.split("")
            let displayFigure;
            let suffix;
            switch(votesDigits.length){
                case 4: 
                    displayFigure = votesSplit.slice(0,2);
                    displayFigure.splice(1,0,'.');
                    suffix = "k";

                break;
                case 5:
                    displayFigure = votesSplit.slice(0,3);
                    displayFigure.splice(2,0,'.')    
                    suffix = "k";                
                break;
                case 6:
                    displayFigure = votesSplit.slice(0,2);
                    displayFigure.splice(1,0,'.')
                    suffix = "m"
                break;
                default:
            }

            return displayFigure.join("")+suffix;
          
        }
        return votes;
    }

    return (
        <div>
            <div className="tileContainer">
                <Link className="postTitle" to={`/r/${data['subreddit']}/comments/${data['id']}`}>
                    <div className="tile">
                        <div className="voteContainer">
                            <h5>{formatUpVotes(data['score'])}</h5>
                        </div>
                        <div className="postPreview">
                            <div className="postHeader">
                                <p className="subredditLink" onClick={() => {renderSubredditLink(data['subreddit'])}}>r/{data['subreddit']}</p>
                                <p>|</p>
                                <p>Posted by u/{data['author']}</p>
                            </div>
                            <div className="postBody">
                                
                                    <h3>{data['title']}</h3>                            
                                <div className="imagePreivew">
                                    {data['preview'] ? 
                                    <img src={fixImageEncoding(data['preview']['images'][0]['source']['url'])} /> :
                                    ''}                   
                                </div>                              
                            </div>  
                            <div className="commentContainer">   
                                {data['num_comments']}
                            </div>                                                                       
                        </div>                  
                    </div>
                </Link>                
            </div>
        </div>
    )

}