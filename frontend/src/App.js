import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import LayoutRoute from './LayoutRoute';
import HomeScreen from './HomeScreen';
import RegistrationScreen from './RegistrationScreen';
import TechnologyListingScreen from './TechnologyListingScreen';
import SignUp from './SignUp';
import LoginScreen from './LoginScreen';


const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <LayoutRoute path="/" exact={true} component={HomeScreen} />
            <LayoutRoute path="/technologies" exact={true} component={TechnologyListingScreen} />
            <LayoutRoute path="/login" exact={true} component={LoginScreen} />
            <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;