import React from 'react';
import { NotificationContainer } from '../Notifications/NotificationContainer';
import { SearchSection } from '../SearchSection';
import { ResultSection } from '../ResultSection';

export function App(): React.ReactElement {
  return (
    <>
      <NotificationContainer />
      <SearchSection />
      <ResultSection />
    </>
  );
}
