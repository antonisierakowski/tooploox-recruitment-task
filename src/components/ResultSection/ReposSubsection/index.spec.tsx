import { render } from '@testing-library/react';
import { provideStore } from '../../../provideStore';
import React from 'react';
import { ReposSubsection } from './index';
import { createPreloadedStore } from '../../../store';
import { rootStateFixture } from '../../../fixtures/rootStateFixture';

const store = createPreloadedStore(rootStateFixture);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(provideStore(<ReposSubsection />, store));
  expect(asFragment()).toMatchSnapshot();
});
