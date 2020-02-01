import React from 'react';

//RTL
import { render } from '@testing-library/react';

//Component
import Header from './Header';

const createComponent = () => render(<Header />);

describe('Dashboard', () => {
	it('Shoul render Header component', () => {
		const component = createComponent();

		expect(component).toBeDefined();
	});
});
