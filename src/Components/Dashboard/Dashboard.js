import React from 'react';

//Material
import { withStyles } from '@material-ui/core';

//Components
import Header from './Header';
import Container from './Container';

import { styles } from './styles';

export const Dashboard = ({ classes }) => (
	<div className={classes.dashboard}>
		<Header />
		<Container />
	</div>
);

export default withStyles(styles)(Dashboard);
