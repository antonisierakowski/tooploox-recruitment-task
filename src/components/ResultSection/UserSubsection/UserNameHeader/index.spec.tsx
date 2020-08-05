import { render } from '@testing-library/react';
import { createPreloadedStore } from '../../../../store';
import { rootStateFixture } from '../../../../fixtures/rootStateFixture';
import { provideStore } from '../../../../provideStore';
import React from 'react';
import { UserNameHeader } from './index';

const store = createPreloadedStore(rootStateFixture);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(provideStore(<UserNameHeader />, store));
  expect(asFragment()).toMatchSnapshot();
});
