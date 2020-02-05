import React from 'react';

//RTL
import { render } from '@testing-library/react';

//Component
import Container from './Container';

const props = {
	sideBarStatus: true
};

const createComponent = props => render(<Container {...props} />);

describe('Container', () => {
	it('Should render Container component', () => {
		const component = createComponent();

		expect(component).toBeDefined();
	});

	it('Should render container component with SideBar', () => {
		const component = createComponent(props);

		const { getAllByTestId } = component;

		const SideBar = getAllByTestId('sidebar');

		expect(SideBar).toBeDefined();
	});
});
