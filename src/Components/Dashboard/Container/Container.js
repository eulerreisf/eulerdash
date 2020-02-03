import React from 'react';

//Material Components
import { withStyles } from '@material-ui/core';

//Components
import Sidebar from './Sidebar';

//Styles
import { styles } from './styles';

export const Container = ({ classes, sideBarStatus }) => (
	<div className={classes.container}>
		<Sidebar sideBarStatus={sideBarStatus} />
		<div>Fazendo</div>
	</div>
);

export default withStyles(styles)(Container);
