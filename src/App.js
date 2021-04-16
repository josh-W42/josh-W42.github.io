import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import SideNav from './components/partials/SideNav';
import TopNav from './components/partials/TopNav';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App">
      <div id="particles-js"></div>
      <TopNav />
      <SideNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
