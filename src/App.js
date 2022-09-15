
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
        <Route path = '/about'>
          <About />
        </Route>
        <Route path = '/resume'>
          <Resume />
        </Route>
        <Route path = '/contact'>
          <Contact />
        </Route>
        </Switch>
        <Footer></Footer>
      </div>    
    </Router>
  );
}

export default App;