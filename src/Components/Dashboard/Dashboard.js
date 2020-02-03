import React, { useState } from 'react';

//Material
import { withStyles } from '@material-ui/core';

//Components
import Header from './Header';
import Container from './Container';

import { styles } from './styles';

export const Dashboard = ({ classes }) => {
	const [sideBarStatus, setSideBarStatus] = useState(false);

	return (
		<div className={classes.dashboard}>
			<Header setSideBarStatus={setSideBarStatus} sideBarStatus={sideBarStatus}/>
			<Container sideBarStatus={sideBarStatus} />
		</div>
	);
};

export default withStyles(styles)(Dashboard);
