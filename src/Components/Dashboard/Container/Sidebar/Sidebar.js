import React from 'react';

//Material Components
import { List, ListItem, Typography, withStyles } from '@material-ui/core';

import { styles } from './styles';

export const Sidebar = ({ classes }) => (
	<List open className={classes.list} data-testid='sidebar'>
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
