import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  useParams
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import DiscoverPage from './pages/DiscoverPage';



// 3 pages About, Discover, Search => /about, ...
// <Route path="/" component={About}/>
// <Route path"/about" component={About}/>

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/discover" component={DiscoverPage}/>
      </Switch>
    </Router>
  );
}

export default App;
