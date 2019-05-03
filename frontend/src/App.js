import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { homePage, loginPage } from './Pages'; 

class App extends Component {
  render(){
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path={"/"} component={homePage} />
            <Route path={"/login"} component={loginPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state){
  const { navigator } = state;
  return {
    navigator
  }
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
