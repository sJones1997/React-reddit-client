import './navbar.css';
import SearchBar from '../searchBar/SearchBar';
import reddit from '../../assets/reddit.png';
import { Link } from 'react-router-dom';
import Home from '../../features/home/Home'

export default function NavBar(){

    return (
        <nav>
            <div className="nav-bar">
                <div className="logo-container">
                    <div>   
                        <Link to='/'>
                            <img src={reddit} />
                        </Link>                        
                    </div>
                </div>
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                <div className="space-container">
                    
                </div>
            </div>
        </nav>
    )

}