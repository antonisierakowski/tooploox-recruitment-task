import { render } from '@testing-library/react';
import React from 'react';
import { LoadingIndicator } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<LoadingIndicator />);
  expect(asFragment()).toMatchSnapshot();
});
