import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './login';
import Details from './details';
import NewUser from './newuser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navigate">
          <span className="navi-el"><Link to="login">Log In</Link></span>
          <span className="navi-el"><Link to="details">Phone Book</Link></span>
          <span className="navi-el"><Link to="addnew">Add New Contact</Link></span>
        </div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/details" component={Details} />
          <Route path="/addnew" component={NewUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
