import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Redux
import { Provider } from "react-redux"
import store from "./store"

//Screens
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";

const  App = () => {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = {HomeScreen}>
        </Route>
        <Route exact path='/login' component={LoginScreen}>
        <Route exact path = '/search' component = {HomeScreen}/>
        </Route>
      </Switch>
        </BrowserRouter>
        </Provider>
      </>
     
  
  );
}

export default App;
