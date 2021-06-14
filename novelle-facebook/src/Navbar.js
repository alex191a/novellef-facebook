import "./sites/stylesheets/App.css"

import React from 'react';
import { Button } from 'semantic-ui-react';


export default function Navbar(){
    return(
      <div className="App-navbar">
        <a href="/">
        <Button>HOME</Button>
        </a>
        <a href="/workspace">
        <Button>WORKSPACE</Button>
        </a>
        <a href="/profile">
        <Button>PROFILE</Button>
        </a>
        <a href="/login">
        <Button>LOGIN</Button>
        </a>
        <a href="/signup">
        <Button>SIGNUP</Button>
        </a>
      </div>
    )
  }