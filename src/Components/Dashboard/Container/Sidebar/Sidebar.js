import React from 'react';

//Material Components
import { List, ListItem, Typography, withStyles } from '@material-ui/core';

import { styles } from './styles';

export const Sidebar = ({ classes, sideBarStatus }) =>
	sideBarStatus && (
		<List open className={classes.list}>
			<ListItem button>
				<Typography className={classes.listItemText}>List 1</Typography>
			</ListItem>
			<ListItem button>
				<Typography className={classes.listItemText}>List 2</Typography>
			</ListItem>
			<ListItem button>
				<Typography className={classes.listItemText}>List 3</Typography>
			</ListItem>
			<ListItem button>
				<Typography className={classes.listItemText}>List 4</Typography>
			</ListItem>
		</List>
	);

export default withStyles(styles)(Sidebar);
