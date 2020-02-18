import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import * as RRD from 'react-router-dom';
//RTL
import { render } from '@testing-library/react';

//Component
import Header from './Header';

const history = jest.fn();

const createComponent = () =>
	render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	);

describe('Dashboard', () => {
	it('Shoul render Header component', async () => {
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
