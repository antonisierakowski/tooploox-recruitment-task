import { createPreloadedStore } from '../../../store';
import { rootStateFixture } from '../../../fixtures/rootStateFixture';
import { render } from '@testing-library/react';
import { provideStore } from '../../../provideStore';
import React from 'react';
import { TextInput } from './index';

const store = createPreloadedStore(rootStateFixture);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(provideStore(<TextInput />, store));
  expect(asFragment()).toMatchSnapshot();
});
