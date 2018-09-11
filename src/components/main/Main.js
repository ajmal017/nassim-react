import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Landing from '../landing/Landing';
import Auth from '../auth/Auth'
import Register from '../register/Register';
import Login from '../login/Login';

export default class Main extends React.Component {
	render() {
		return(
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/home' component={Home} />
				<Route path='/auth' component={Auth} />
				<Route path='/register' component={Register} />
				<Route path='/login' component={Login}/>
			</Switch>
		)
	}
}