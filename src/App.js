import React from 'react';

//React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Styles HOC
import { withStyles } from '@material-ui/core/styles';

//Components
import Dashboard from 'Components/Dashboard';
import SignIn from 'Components/SignIn';
import SignUp from 'Components/SignUp';

//Styles
import { styles } from './styles';

export const App = ({ classes }) => (
	<div className={classes.root}>
		<Router>
			<Switch>
				<Route path='/signin'>
					<SignIn />
				</Route>
				<Route path='/signup'>
					<SignUp />
				</Route>
				<Route path='/'>
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	</div>
);

export default withStyles(styles)(App);
