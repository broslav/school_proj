import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import {Hello} from './js/Hello';
import Layout from './js/Layout';
import {About} from './js/About';
import {Career} from './js/Career';
import {Portfolio} from './js/Portfolio';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Hello}/>
        <Route path='/app' component={Layout}>
            <IndexRoute component={About}></IndexRoute>
            <Route path='career' component={Career}/>
            <Route path='portfolio' component={Portfolio}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
