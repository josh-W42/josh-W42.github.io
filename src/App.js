import { Route, Switch } from 'react-router';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import SideNav from './components/Nav';

function App() {

  return (
    <div className="App">
      <SideNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
