import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Featured, Landing } from './components/layout';
import store from './stores';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const app = (
		<Provider store={ store.configureStore() }>
			<Router history={browserHistory}>
				<Route path="/" component={Landing} />
				<Route path="/feature" component={Featured} />
			</Router>
		</Provider>
)


ReactDOM.render(app, document.getElementById('root'));