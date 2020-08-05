import { render } from '@testing-library/react';
import React from 'react';
import { GithubUserSearch } from './index';
import { createPreloadedStore } from '../../../store';
import { rootStateFixture } from '../../../fixtures/rootStateFixture';
import { provideStore } from '../../../provideStore';

const store = createPreloadedStore(rootStateFixture);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(provideStore(<GithubUserSearch />, store));
  expect(asFragment()).toMatchSnapshot();
});
