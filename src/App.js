import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <Router>
        <div>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
          <Navbar/>
          <div style={{background:"#333"}}>

          <Switch>
            <Route path="/business" exact>
              <News setProgress={this.setProgress}  key="business" category="business" />
            </Route>
            <Route path="/entertainment" exact>
              <News setProgress={this.setProgress}  key="entertainment" category="entertainment" />
            </Route>
            <Route path="/health" exact>
              <News setProgress={this.setProgress}  key="health" category="health" />
            </Route>
            <Route path="/science" exact>
              <News setProgress={this.setProgress}  key="science" category="science" />
            </Route>
            <Route path="/sports" exact>
              <News setProgress={this.setProgress}  key="sports" category="sports" />
            </Route>
            <Route path="/technology" exact>
              <News setProgress={this.setProgress}  key="technology" category="technology" />
            </Route>
            <Route path="/" exact>
              <News setProgress={this.setProgress}  key="general" category="general" />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
