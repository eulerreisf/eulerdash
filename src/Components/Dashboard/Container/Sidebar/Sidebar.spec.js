import React from 'react';

//RTL
import { render } from '@testing-library/react';

//Component
import Sidebar from './Sidebar';

const createComponent = () => render(<Sidebar />);

describe('Sidebar', () => {
	it('Shoul render MenuButton component', () => {
		const component = createComponent();

		expect(component).toBeDefined();
	});
});
