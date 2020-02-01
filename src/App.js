import React from 'react';

//Styles HOC
import { withStyles } from '@material-ui/core/styles';

//Components
import Dashboard from './Components/Dashboard';

//Styles
import { styles } from './styles';

export const App = ({ classes }) => (
	<div className={classes.root}>
		<Dashboard />
	</div>
);

export default withStyles(styles)(App);
