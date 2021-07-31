import './comments.css'

export default function Comments ({data}) {

    const htmlTagEncoding = (comment) => {
        let div = document.createElement('div')
        div.innerHTML = comment;
        return div.childNodes.length === 0 ? "" : {__html : div.childNodes[0].nodeValue};
    } 

    return (
        <div className="commentsContainer">
            <p className="replyAuthor" >Author: {data.author}</p>
            <div className="replyBody" dangerouslySetInnerHTML={data.distinguished === 'moderator' ? htmlTagEncoding(data.body_html) : htmlTagEncoding(data.body_html)} ></div>
            <p className="replyScore">Upvotes: {data.score}</p>
            {data.replies ? 
            data.replies.data.children.map((e,i) => {
                if(e.kind === 't1'){
                    return (
                        <div key={`commentReply_${i}`} className="commentReply" style={{'paddingLeft': 10, 'borderLeft': '1px solid rgba(33,33,33,0.25)', 'marginLeft': 10 * i}} >
                            <p className="replyAuthor">Author: {e.data.author}</p>
                            <div className="replyBody" dangerouslySetInnerHTML={e.data.distinguished === 'moderator' ? htmlTagEncoding(e.data.body_html) : htmlTagEncoding(e.data.body_html)} ></div>
                            <p className="replyScore">Upvotes: {e.data.score}</p>
                        </div>
                    )
                } 
                return '';
            })
            :
            ''}
        </div>        
    )
}