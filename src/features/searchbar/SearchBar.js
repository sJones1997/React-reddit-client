import { useState, useEffect } from 'react';
import './searchbar.css';
import {Link, useHistory} from 'react-router-dom'
var FontAwesome = require('react-fontawesome')

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("");
    const history = useHistory();

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        } })    

    const handleKeyPress = (e) => {
        if(e.which === 13 && searchTerm.length){
           history.push(`/search/${searchTerm}`)
        }
    }

    const searchResult = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <section>
            <div className="inputContainer">
                <div className="iconContainer">
                    <Link to={`/search/${searchTerm}`}>
                        <FontAwesome
                            className="super-crazy-colors"
                            name="search"
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:'1.25em', padding: '0 10px', color:'#878a8c' }}
                        />                    
                    </Link>
                </div>
                <input placeholder="Search" value={searchTerm} onChange={searchResult}/>
            </div>
        </section>
    );

}