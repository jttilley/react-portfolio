import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      
      </Router>
    </>
  );
}

export default App;

