import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

export const provideStore = (
  component: React.ReactElement,
  store: Store,
): React.ReactElement => <Provider store={store} children={component} />;
