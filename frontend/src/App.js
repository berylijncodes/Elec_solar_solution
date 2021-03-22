import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//Screens
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";

const  App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {HomeScreen}>
        </Route>
        <Route exact path='/login' component={LoginScreen}>
        <Route exact path = '/search' component = {HomeScreen}/>
        </Route>
      </Switch>
    </BrowserRouter>
     
  
  );
}

export default App;
