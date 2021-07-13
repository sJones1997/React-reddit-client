import Feed  from '../../components/feed/Feed';


export default function Search(match){

    return (
        <Feed term={match.match.params.term}/>
    )

}