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

export default function App () {
  const [progress, setProgress] = useState(0);
  // const setProgress = (progress) =>{
  //   setState({
  //     progress: progress
  //   })
  // }
  return (
    <Router>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar/>
        <div style={{minHeight:'74vh'}}>
        <Switch>
          <Route path="/business" exact>
            <News setProgress={setProgress}  key="business" category="business" />
          </Route>
          <Route path="/entertainment" exact>
            <News setProgress={setProgress}  key="entertainment" category="entertainment" />
          </Route>
          <Route path="/health" exact>
            <News setProgress={setProgress}  key="health" category="health" />
          </Route>
          <Route path="/science" exact>
            <News setProgress={setProgress}  key="science" category="science" />
          </Route>
          <Route path="/sports" exact>
            <News setProgress={setProgress}  key="sports" category="sports" />
          </Route>
          <Route path="/technology" exact>
            <News setProgress={setProgress}  key="technology" category="technology" />
          </Route>
          <Route path="/:query" >
            <News setProgress={setProgress}  key="search" category="search" />
          </Route>
          <Route path="/" exact>
            <News setProgress={setProgress}  key="general" category="general" />
          </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
