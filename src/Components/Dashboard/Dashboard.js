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
			<div className={classes.header}>
				<Header
					setSideBarStatus={setSideBarStatus}
					sideBarStatus={sideBarStatus}
				/>
			</div>
			<div className={classes.container}>
				<Container sideBarStatus={sideBarStatus} />
			</div>
		</div>
	);
};

export default withStyles(styles)(Dashboard);
