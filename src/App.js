import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/nav';
import Home from './pages/Home';
import SignUp from './pages/auth/signUp';
import Login from './pages/auth/login';
import OnboardingIntro from './pages/onboarding/onboardingIntro';
import Demographics from './pages/onboarding/onboardingDemographics';
import FinancialInformation from './pages/onboarding/onboardingFinancial';
import FinancialProducts from './pages/onboarding/onboardingProducts';
import Dashboard from './pages/dashboard';
import ProductPage from './pages/dashboard/productPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/sign-in' component={Login} />
          <Route exact path='/onboarding-intro' component={OnboardingIntro} />
          <Route exact path='/onboarding-demographics' component={Demographics} />
          <Route exact path='/onboarding-financial-info' component={FinancialInformation} />
          <Route exact path='/onboarding-financial-products' component={FinancialProducts} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/product-page' component={ProductPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
