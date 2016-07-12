import { Router, Route, IndexRoute, Link, hashHistory, browserHistory } from 'react-router'
import {App, About, NoMatch, Home } from '../views'
import React, { Component } from 'react';

export default class Routers extends Component {
    render() {
        return (
          <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route path="*" component={NoMatch} />
          </Router>
        );
    }
}

