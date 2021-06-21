import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchResult } from './searchBarSlice';
import './searchbar.css';

export default function SearchBar() {

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

    const setSearchResult = (e) => {
        
        setSearchTerm(e.target.value);

        const term = {
            searchTerm: searchTerm
        }

        dispatch(getSearchResult(term))

    }

    return (
        <section>
            <div>
                <input placeholder="Search" value={searchTerm} onChange={setSearchResult}/>
            </div>
        </section>
    );

}