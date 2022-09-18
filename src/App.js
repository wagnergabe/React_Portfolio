
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
          <Route exact path='/' component={ Home } >
          </Route>
        <Route path = '/about'>
          <About />
        </Route>
        <Route path = '/resume'>
          <Resume />
        </Route>
        <Route path = '/contact'>
          <Contact />
        </Route>
        <Route path = '/portfolio'>
          <Portfolio />
        </Route>
        </Switch>
      </div>    
      <Footer></Footer>
    </Router>
  );
}

export default App