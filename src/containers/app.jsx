import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import home from './homePage/homePage';
import login from './loginPage/loginPage';
import './app.less';


class App extends Component {
  render() {
    return (
      <div className="App">
      	<Switch>
	        <Route exact path="/" component={login} />
	        <Route path="/home" component={home} />
	        <Redirect from="*" to="/"></Redirect>
	      </Switch>
      </div>
    );
  }
}

export default App;
