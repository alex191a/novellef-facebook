import './stylesheets/App.css';
import {Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from 'react'

export default function profile(){
    return (
    <div className="App">
      <header className="App-header">
        <div> 
          <button href="#profile">
            hello 
          </button>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
}