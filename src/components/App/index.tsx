import React from 'react';
import { NotificationContainer } from '../Notifications/NotificationContainer';
import { SearchSection } from '../SearchSection';

export function App(): React.ReactElement {
  return (
    <>
      <NotificationContainer />
      <SearchSection />
    </>
  );
}
