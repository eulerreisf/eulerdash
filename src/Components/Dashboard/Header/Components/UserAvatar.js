//React
import React, { useState } from 'react';

//Material Components
import {
	Avatar,
	IconButton,
	MenuList,
	MenuItem,
	ClickAwayListener
} from '@material-ui/core';

//History
import { useHistory } from 'react-router-dom';

export const UserAvatar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const history = useHistory();

	const handleClickAvatar = () => setOpenMenu(true);

	const handleOnCloseMenu = () => setOpenMenu(false);

	return (
		<>
			<IconButton onClick={handleClickAvatar}>
				<Avatar alt='Euler das Virgens' src='/images/avatar/eulerAvatar.jpeg' />
			</IconButton>
			{openMenu && (
				<ClickAwayListener onClickAway={handleOnCloseMenu}>
					<MenuList
						autoFocusItem={openMenu}
						style={{ backgroundColor: 'yellow' }}
					>
						<MenuItem onClick={handleOnCloseMenu}>Profile</MenuItem>
						<MenuItem onClick={handleOnCloseMenu}>My account</MenuItem>
						<MenuItem
							onClick={()=>history.push('/signin')}
						>
							Logout
						</MenuItem>
					</MenuList>
				</ClickAwayListener>
			)}
		</>
	);
};

export default UserAvatar;
