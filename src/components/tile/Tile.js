import './tile.css'

export function Tile({ data }){

    const fixImageEncoding = (imageUrl) => {
        return imageUrl.replace("amp;s", "s")
    }

    return (
        <div>
            <div className="tileContainer">
                <div className="tile">
                    <div className="imagePreivew">
                        <img src={data['preview'] ? fixImageEncoding(data['preview']['images'][0]['source']['url']) : ''} width="200px" height="auto" />                   
                    </div>
                <div className="postPreview">
                    {data['title']}<br/>
                    {data['subreddit']}<br/>
                    {data['author']}<br/>
                </div> 
                </div>
            </div>
        </div>
    )

}