import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom'
import Home from './page/Home';
import AboutUsPage from './page/AboutUs';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about-us" component={AboutUsPage} />
      </Switch>
    )
  }
}

export default App;
