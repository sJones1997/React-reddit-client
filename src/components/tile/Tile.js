import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './tile.css'
import { useEffect } from 'react';
import { fetchPostComments, isLoading, selectComments } from './tileSlice';

export function Tile({ data }){

    const dispatch = useDispatch();

    const comments = useSelector(selectComments)
    const loading = useSelector(isLoading)

    useEffect(() => {
        dispatch(fetchPostComments({id: data.id, subreddit:data.subreddit}))
    },[dispatch, data])

    const fixImageEncoding = (imageUrl) => {
        let imageUrlSplit = imageUrl.split("&amp;")
        imageUrl = imageUrlSplit.join("&");
        return imageUrl;
    }

    const formatUpVotes = (ups, downs) => {
        let votes = ups - downs;
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
                <div className="tile">
                    <div className="voteContainer">
                        <h5>{formatUpVotes(data['ups'], data['downs'])}</h5>
                    </div>
                    <div className="postPreview">
                        <div className="postHeader">
                            <p><Link to={`/r/${data['subreddit']}`}>
                            {data['subreddit_name_prefixed']}
                            </Link></p>
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
                            {comments[data['id']] ? comments[data['id']].length : "..."}
                        </div>                                                                       
                    </div>                  
                </div>
            </div>
        </div>
    )

}