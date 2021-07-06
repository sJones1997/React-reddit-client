import './navbar.css';
import SearchBar from '../../features/searchbar/SearchBar';
import reddit from '../../assets/reddit.png';

export default function NavBar(){

    return (
        <nav>
            <div className="nav-bar">
                <div className="logo-container">
                    <div>   
                        <a href="/"><img src={reddit}/></a>                        
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