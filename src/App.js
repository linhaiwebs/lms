import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import ErrorPage from './Errorpage';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/lp" exact component={LandingPage} />
      <Route path="/privacy" exact component={PrivacyPolicy} />
      <Route path="/404" component={ErrorPage} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default App;
