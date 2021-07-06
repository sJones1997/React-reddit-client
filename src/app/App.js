import './App.css';
import NavBar from '../components/navbar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchFeed from '../features/searchFeed/searchFeed'

function App() {
  return (
    <div className="App">
      <Router>      
      <header>
        <NavBar />
      </header>
      <main>

        <Switch>
          <Route path={`/search/:term`} component={SearchFeed} />
        </Switch>

      </main>
      </Router>
    </div>
  );
}

export default App;
