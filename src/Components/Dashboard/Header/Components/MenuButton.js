import React from 'react';

//Components
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

//Style with HOC
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

export const MenuButton = ({ classes, setSideBarStatus, sideBarStatus }) => (
	<IconButton
		arial-label='menu'
		className={classes.iconButton}
		onClick={() => setSideBarStatus(!sideBarStatus)}
	>
		<Menu className={classes.menu} />
	</IconButton>
);

export default withStyles(styles)(MenuButton);
