import React, { useState } from 'react';


export default function SearchBar() {

    const [searchResult, setSearchResult] = useState("");

    const getSearchResult = (e) => {
        console.log(searchResult)
        setSearchResult(e.target.value)
    }

    return (
        <section>
            <div>
                <input value={searchResult} onChange={getSearchResult}/>
            </div>
        </section>
    );

}