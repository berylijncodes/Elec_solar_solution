import React from 'react'
import {BroswerRouter, Switch, Route} from 'react-router-dom'
//Screens
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";

const  App = () => {
  return (
    <BroswerRouter>
      <Switch>
        <Route exact path = '/' component = {HomeScreen}>
        </Route>
        <Route exact path = '/login' component = {LoginScreen}>
        </Route>
      </Switch>
    </BroswerRouter>
     
  
  );
}

export default App;
