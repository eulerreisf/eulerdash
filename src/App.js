import React from 'react';

//Styles HOC
import { withStyles } from '@material-ui/core/styles';

//Components
import Dashboard from './Components/Dashboard';

//Styles
import { styles } from './styles';

export const App = ({ classes }) => (
	<dib className={classes.root}>
		<Dashboard />
	</dib>
);

export default withStyles(styles)(App);
