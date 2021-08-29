import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <div style={{background:"#333"}}>

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
            <Route path="/" exact>
              <News key="general" category="general" />
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
