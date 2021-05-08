import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/auth/signUp';
import Login from './pages/auth/login';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/sign-in' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
