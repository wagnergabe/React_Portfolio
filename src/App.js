
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
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
        </Switch>
        <Footer></Footer>
      </div>    
    </Router>
  );
}

export default App;