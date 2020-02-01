import React from 'react';

//RTL
import { render } from '@testing-library/react';

//Component
import Dashboard from './Dashboard';

const createComponent = () => render(<Dashboard />);

describe('Dashboard', () => {
	it('Shoul render Dashboard component', () => {
		const component = createComponent();

		expect(component).toBeDefined();
	});
});
