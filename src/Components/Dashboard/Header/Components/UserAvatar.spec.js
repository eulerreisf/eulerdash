import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import * as RRD from 'react-router-dom';
//RTL
import { render } from '@testing-library/react';

//Component
import UserAvatar from './UserAvatar';

const history = jest.fn();

const createComponent = () =>
	render(
		<MemoryRouter>
			<UserAvatar />
		</MemoryRouter>
	);

describe('UserAvatar', () => {
	it('Shoul render UserAvatar component', async () => {
		await jest.mock('react-router-dom', () => ({
			...jest.requireActual('react-router-dom'),
		  	useHistory: () => ({
				push: history
			})
		}));

		const component = createComponent();

		expect(component).toBeDefined();
	});
});
