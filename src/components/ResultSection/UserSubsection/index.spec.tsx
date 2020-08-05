import { render } from '@testing-library/react';
import { UserSubsection } from './index';
import React from 'react';
import { createPreloadedStore } from '../../../store';
import { rootStateFixture } from '../../../fixtures/rootStateFixture';
import { provideStore } from '../../../provideStore';

const store = createPreloadedStore(rootStateFixture);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(provideStore(<UserSubsection />, store));
  expect(asFragment()).toMatchSnapshot();
});
