import './stylesheets/App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React from 'react'
import Navbar from '../Navbar'
import {createuser} from '../backend'
export default function app(){
    return (
    <div className="App">
        <Navbar/>
      <header className="App-header">
        <div>

          <button onClick={createuser("hell","fuck off","Hell is our future")}>
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