import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const dashboardTitle = getByText(/Euler Dashboard/i);
  expect(dashboardTitle).toBeInTheDocument();
});
