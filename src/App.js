import './App.css';
import Header from './components/Header';
import HeroText from './components/HeroText';


// 3 pages About, Discover, Search => /about, ...
// <Route path="/" component={About}/>
// <Route path"/about" component={About}/>

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroText/>
    </div>
  );
}

export default App;
