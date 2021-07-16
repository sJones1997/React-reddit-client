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

export const baseUrl = 'https://www.reddit.com/';

function App() {

  return (
    <div className="App">
      <Router>      
      <header>
        <NavBar />
      </header>
      <main>

        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path={`/search/:term`} component={Search} />
          <Route exact path={`/r/:subreddit/comments/:id`} component={FullPost} />
        </Switch>

      </main>
      </Router>
    </div>
  );
}

export default App;
