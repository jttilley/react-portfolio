import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Router basename='/›'>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </>
  );
}

export default App;

