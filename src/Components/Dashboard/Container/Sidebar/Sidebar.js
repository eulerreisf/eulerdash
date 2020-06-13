import React from 'react';

//Material Components
import {
	Drawer,
	List,
	ListItem,
	Typography,
	withStyles
} from '@material-ui/core';

import { styles } from './styles';

export const Sidebar = ({ classes }) => (
	<Drawer variant='permanent' className={classes.drawer} classes={{
		paper: classes.drawerPaper,
	}}>
		<div className={classes.section} />
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
	</Drawer>
);

export default withStyles(styles)(Sidebar);
