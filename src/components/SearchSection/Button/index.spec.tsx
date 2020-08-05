import { render } from '@testing-library/react';
import React from 'react';
import { Button } from './index';

it('should match to the generated snapshot', () => {
  const { asFragment } = render(<Button caption="test" />);
  expect(asFragment()).toMatchSnapshot();
});
