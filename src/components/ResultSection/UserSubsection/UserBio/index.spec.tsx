import { render } from '@testing-library/react';
import { createPreloadedStore } from '../../../../store';
import { rootStateFixture } from '../../../../fixtures/rootStateFixture';
import { provideStore } from '../../../../provideStore';
import React from 'react';
import { UserBio } from './index';

const store = createPreloadedStore(rootStateFixture);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(provideStore(<UserBio />, store));
  expect(asFragment()).toMatchSnapshot();
});
