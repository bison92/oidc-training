import React from 'react';
import { render } from '@testing-library/react';
import { AppRouter } from './AppRouter';

test('renders Ant Design copyright', () => {
  
  const { getByText } = render(<AppRouter />);
  const antElement = getByText(/Ant/i);
  expect(antElement).toBeInTheDocument();
});
