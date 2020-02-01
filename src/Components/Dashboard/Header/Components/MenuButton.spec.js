import React from 'react';

//RTL
import { render } from '@testing-library/react';

//Component
import MenuButton from './MenuButton';

const createComponent = () => render(<MenuButton />);

describe('MenuButton', () => {
	it('Shoul render MenuButton component', () => {
		const component = createComponent();

		expect(component).toBeDefined();
	});
});
