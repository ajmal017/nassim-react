import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Landing from '../landing/Landing';

export default class Main extends React.Component {
	render() {
		return(
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/home' component={Home} />
			</Switch>
		)
	}
}

// /Users/Leo/kurtosis-react/src/components/home/Home.js