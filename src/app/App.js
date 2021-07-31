import './App.css';
import NavBar from '../components/navbar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from '../features/search/search'
import Home from '../features/home/Home';
import FullPost from '../features/fullPost/FullPost';
import Subreddit from '../features/subreddit/Subreddit';
export const baseUrl = 'https://www.reddit.com/';

function App() {

  return (
    <div className="App">
      <Router>      
      <header>
        <NavBar />
      </header>
      <main className="mainContainer">

        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path={`/search/:term`} component={Search} />
          <Route exact path={`/r/:subreddit`} component={Subreddit} />          
          <Route exact path={`/r/:subreddit/comments/:id`} component={FullPost} />
        </Switch>

      </main>
      </Router>
    </div>
  );
}

export default App;
