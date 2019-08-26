import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Nav from './components/Nav/nav';
import Home from './containers/Home/home';
import Search from './containers/Search/search';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={Nav} />
      <Switch>
        <Route path="/search" component={Search} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
