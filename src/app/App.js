import './App.css';
import NavBar from '../components/navbar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from '../features/search/search'
import Home from '../features/home/Home';

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
          <Route path={`/search/:term`} component={Search} />
        </Switch>

      </main>
      </Router>
    </div>
  );
}

export default App;
