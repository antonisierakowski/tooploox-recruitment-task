import { render } from '@testing-library/react';
import { provideStore } from '../../../../provideStore';
import React from 'react';
import { RepositoryEntry } from './index';
import { createPreloadedStore } from '../../../../store';
import { rootStateFixture } from '../../../../fixtures/rootStateFixture';

const store = createPreloadedStore(rootStateFixture);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(
    provideStore(<RepositoryEntry id={1} />, store),
  );
  expect(asFragment()).toMatchSnapshot();
});
