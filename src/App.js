import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/auth/signUp';
import Login from './pages/auth/login';
import OnboardingIntro from './pages/onboarding/onboardingIntro';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/sign-in' component={Login} />
          <Route exact path='/onboarding-intro' component={OnboardingIntro} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
