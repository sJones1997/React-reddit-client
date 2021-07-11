import './tile.css'

export function Tile({ data }){

    const fixImageEncoding = (imageUrl) => {
        let imageUrlSplit = imageUrl.split("&amp;")
        imageUrl = imageUrlSplit.join("&");
        return imageUrl;
    }

    return (
        <div>
            <div className="tileContainer">
                <div className="tile">
                    <div className="voteContainer">
                        &nbsp;
                    </div>
                    <div className="postPreview">
                        {console.log(data)}
                        <div className="postHeader">
                            <p>{data['subreddit_name_prefixed']}</p>
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
                    </div>                    
                </div>
            </div>
        </div>
    )

}