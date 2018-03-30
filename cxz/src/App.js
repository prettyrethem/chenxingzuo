import React, { Component } from 'react';
import './App.css';
import RoutersCommon from './commons/router'
import routerData from './routers/router'
import { Redirect, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect exact from='/' to='/index/home'></Redirect>          
          <RoutersCommon routes={routerData.routerItem}></RoutersCommon>
        </Switch>                
      </div>
    );
  }
}

export default App;
