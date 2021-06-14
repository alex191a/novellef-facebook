
import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, MemoryRouter } from 'react-router-dom';


import profile from './sites/profile';
import home from './sites/home';
import workspace from './sites/workspace';
import login from './sites/login';
import signup from './sites/signup';

export default function App() {
  
  return(
  <Router>
    <Suspense fallback={<div>Wait a momment. Loading...</div>}>
      <Switch>
        <Route exact path ="/"          component ={home} /> 
        <Route ecact path ="/profile"   component ={profile} />
        <Route exact path ="/workspace" component ={workspace} />
        <Route exact path ="/login"     component ={login} />
        <Route exact path = "/signup"   component ={signup} />
      </Switch>
      </Suspense>
  </Router>
  )
}
