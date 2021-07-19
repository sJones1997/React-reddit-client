import { useEffect } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './tile.css'
var FontAwesome = require('react-fontawesome')

export function Tile({ data }){

    const history = useHistory();  
    let commentPage = false;  

    useEffect(() => {
        let url = window.location.href
        if(url.includes("comments") & url.includes('r')){
            commentPage = true;
        }
    },[])

    const fixImageEncoding = (imageUrl) => {
        let imageUrlSplit = imageUrl.split("&amp;")
        imageUrl = imageUrlSplit.join("&");
        return imageUrl;
    }

    const renderSubredditLink = (subreddit, isCommentPage) => {
        console.log(isCommentPage)
        if(subreddit && !isCommentPage){
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
                
                    <div className="tile">
                        <div className="voteContainer">
                            <h5>{formatUpVotes(data['score'])}</h5>
                        </div>
                        <div className="postPreview">
                            <div className="postHeader">
                                <p className="subredditLink" onClick={() => {renderSubredditLink(data['subreddit'], commentPage)}}>r/{data['subreddit']}</p>
                                <p>|</p>
                                <p>Posted by u/{data['author']}</p>
                            </div>
                            <Link className="postTitle" to={`/r/${data['subreddit']}/comments/${data['id']}`}>                            
                            <div className="postBody">
                                <h3>{data['title']}</h3>            
                                <div className="imagePreivew">
                                    {data['preview'] ? 
                                    <img src={fixImageEncoding(data['preview']['images'][0]['source']['url'])} /> :
                                    ''}                   
                                </div>                              
                            </div>  
                            <div className="commentContainer">   
                                <div>
                                    <FontAwesome
                                    name="comment"
                                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:'1.25em', paddingRight: '10px', color:'#878a8c' }}/>                                   
                                    <p>{data['num_comments']}</p>                                  
                                </div>
                            </div> 
                            </Link>                                                                                     
                        </div>                  
                    </div>              
            </div>
        </div>
    )

}