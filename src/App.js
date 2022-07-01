import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import UserDetails from './UserDetails';
import Edit from './Edit';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home/> 
            </Route>
            <Route path="/home">
              <Home/> 
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/user-details/:id">
              <UserDetails/>
            </Route>
            <Route path="/edit/:id">
              <Edit/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    

  );
}

export default App;
