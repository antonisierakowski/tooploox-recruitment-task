import { createPreloadedStore } from '../../store';
import { rootStateFixture } from '../../fixtures/rootStateFixture';
import { render } from '@testing-library/react';
import { provideStore } from '../../provideStore';
import React from 'react';
import { SearchSection } from './index';

const store = createPreloadedStore(rootStateFixture);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(provideStore(<SearchSection />, store));
  expect(asFragment()).toMatchSnapshot();
});
