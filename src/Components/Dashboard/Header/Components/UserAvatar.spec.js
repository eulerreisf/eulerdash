import React from 'react';

//RTL
import { render } from '@testing-library/react';

//Component
import UserAvatar from './UserAvatar';

const createComponent = () => render(<UserAvatar />);

describe('UserAvatar', () => {
	it('Shoul render UserAvatar component', () => {
		const component = createComponent();

		expect(component).toBeDefined();
	});
});
