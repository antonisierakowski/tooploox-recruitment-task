import { render } from '@testing-library/react';
import { ResultSection } from './index';
import React from 'react';
import { rootStateFixture } from '../../fixtures/rootStateFixture';
import { createPreloadedStore } from '../../store';
import { provideStore } from '../../provideStore';

const store = createPreloadedStore(rootStateFixture);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(provideStore(<ResultSection />, store));
  expect(asFragment()).toMatchSnapshot();
});
