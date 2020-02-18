import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import * as RRD from 'react-router-dom';
//RTL
import { render } from '@testing-library/react';

//Component
import Dashboard from './Dashboard';

const history = jest.fn();

const createComponent = () =>
	render(
		<MemoryRouter>
			<Dashboard />
		</MemoryRouter>
	);

describe('Dashboard', () => {
	it('Shoul render Dashboard component', async () => {
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
