import React from "react";
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";

import ReactDOM from 'react-dom'
import Movie from "./components/Movie"
import styles from './App.module.css'
import {useState} from 'react'
import {resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
 return <Router>
  <Switch>

      <Route path='/movie/:id'>
          <Detail />
      </Route>
      <Route path='/'>
          <Home />
      </Route>
  </Switch>
 </Router>
}

export default App;
