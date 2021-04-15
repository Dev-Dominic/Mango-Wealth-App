import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
