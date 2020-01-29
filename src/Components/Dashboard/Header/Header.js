import React from 'react';

//Components
import { Typography } from '@material-ui/core';
import MenuButton from './Components/MenuButton';
import UserAvatar from './Components/UserAvatar';

//Style with HOC
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

export const Header = ({ classes }) => (
	<div className={classes.root}>
		<MenuButton />
		<Typography variant='h6' className={classes.typography}>
			Euler Dashboard
		</Typography>
		<UserAvatar />
	</div>
);

export default withStyles(styles)(Header);
