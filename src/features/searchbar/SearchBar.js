import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchResult } from './searchBarSlice';
import './searchbar.css';

export default function SearchBar() {

    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        } })    

    const handleKeyPress = (e) => {
        if(e.which === 13){
            console.log(searchTerm);
            dispatch(fetchSearchResult({searchTerm: searchTerm}));
        }
    }

    const searchResult = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <section>
            <div>
                <input placeholder="Search" value={searchTerm} onChange={searchResult}/>
            </div>
        </section>
    );

}