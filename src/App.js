
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        <Switch>
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