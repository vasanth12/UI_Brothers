import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import FontAwesome from 'react-fontawesome';
import { createStore, applyMiddleware } from 'redux';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';


// render(< Router history={browserHistory} routes={routes} />,document.getElementById('app'));
class App extends React.Component{
  render(){
    const store = createStore(
      (state = {}) => state,
      applyMiddleware(thunk)
    );

    return(
      <Provider store = {store} >
      <Router history={browserHistory}>
        <Route path = {"/"} component = {Login} />
        <Route path = {'Login'} component = {Login} />
        <Route path = {'Home'} component = {Home} />
      </Router>
      </Provider>
    );
  }
}


render(<App />, window.document.getElementById('app'));
