import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';


import Html from './pages/html/html';
import HtmlKnowledge from './pages/html/htmls'
import Css from './pages/css/css';
import Es6 from './pages/es6/es6';
import Reacts from './pages/react/react';
import Vue from './pages/vue/vue';
import Uniapp from './pages/uniapp/uniapp';
import Ts from './pages/ts/ts';
import Js from './pages/js/js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/html' component={ Html }></Route>
        <Route exact path='/html/:childName' component={ HtmlKnowledge }></Route>
        <Route exact path='/css' component={ Css }></Route>
        <Route exact path='/js' component={ Js }></Route>
        <Route exact path='/es6' component={ Es6 }></Route>
        <Route exact path='/react' component={ Reacts }></Route>
        <Route exact path='/vue' component={ Vue }></Route>
        <Route exact path='/ts' component={ Ts }></Route>
        <Route exact path='/uniapp' component={ Uniapp }></Route>
        <Route component={ ()=><div>404找不到地址栏的页面</div> }></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
