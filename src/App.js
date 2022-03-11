import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setProgress } from './state/actions';

export default function App () {

  let dispatch = useDispatch();
  let progress = useSelector(state => state.progressReducer)

  return (
    <Router>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => dispatch(setProgress(0))}
        />
        <Navbar/>
        <div style={{minHeight:'74vh'}}>
        <Switch>
          <Route path="/business" exact>
            <News key="business" category="business" />
          </Route>
          <Route path="/entertainment" exact>
            <News key="entertainment" category="entertainment" />
          </Route>
          <Route path="/health" exact>
            <News key="health" category="health" />
          </Route>
          <Route path="/science" exact>
            <News key="science" category="science" />
          </Route>
          <Route path="/sports" exact>
            <News key="sports" category="sports" />
          </Route>
          <Route path="/technology" exact>
            <News key="technology" category="technology" />
          </Route>
          <Route path="/:query" >
            <News key="search" category="search" />
          </Route>
          <Route path="/" exact>
            <News key="general" category="general" />
          </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
