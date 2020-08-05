import { createPreloadedStore } from '../../../../store';
import { rootStateFixture } from '../../../../fixtures/rootStateFixture';
import { render } from '@testing-library/react';
import { provideStore } from '../../../../provideStore';
import {
  onlyFailureNotificationStateFixture,
  onlySuccessNotificationStateFixture,
  onlyUnexpectedTypeNotificationStateFixture,
} from '../../../../fixtures/notifiationStateFixture';
import React from 'react';
import {
  NotificationsState,
  NotificationType,
} from '../../../../store/notifications/types';
import { RootState } from '../../../../store/types';
import { Notification } from '../index';

const store = createPreloadedStore(rootStateFixture);

const testNotifications = rootStateFixture.notificationsState.notifications;
const testIds = testNotifications.map(notification => notification.id);

it('should match to the generated snapshot', () => {
  const { asFragment } = render(
    provideStore(<Notification id={testIds[0]} />, store),
  );
  expect(asFragment()).toMatchSnapshot();
});

it('should display the right notification given specific id', () => {
  const notificationIndex = 1;
  const expectedNotificationText =
    testNotifications[notificationIndex].textContent;

  const { container } = render(
    provideStore(<Notification id={testIds[notificationIndex]} />, store),
  );
  expect(container.textContent).toEqual(expectedNotificationText);
});

describe('getIconType helper function', () => {
  it('should return Done icon for notification type success', () => {
    const store = createPreloadedStore(
      mapNotificationsStateToRootState(onlySuccessNotificationStateFixture),
    );
    const {
      notificationType,
      id,
    } = onlySuccessNotificationStateFixture.notifications[0];
    const { getByTestId, container } = render(
      provideStore(<Notification id={id} />, store),
    );

    expect(notificationType).toBe(NotificationType.SUCCESS);
    expect(container.querySelectorAll('.notification')).toHaveLength(1);
    expect(getByTestId('successIcon')).toBeInTheDocument();
  });
  it('should return Error icon for notification type failure', () => {
    const store = createPreloadedStore(
      mapNotificationsStateToRootState(onlyFailureNotificationStateFixture),
    );
    const {
      notificationType,
      id,
    } = onlyFailureNotificationStateFixture.notifications[0];
    const { getByTestId, container } = render(
      provideStore(<Notification id={id} />, store),
    );

    expect(notificationType).toBe(NotificationType.FAILURE);
    expect(container.querySelectorAll('.notification')).toHaveLength(1);
    expect(getByTestId('failureIcon')).toBeInTheDocument();
  });
  it('should return Info icon for unexpected notification type', () => {
    const store = createPreloadedStore(
      mapNotificationsStateToRootState(
        onlyUnexpectedTypeNotificationStateFixture,
      ),
    );
    const { id } = onlyUnexpectedTypeNotificationStateFixture.notifications[0];
    const { getByTestId, container } = render(
      provideStore(<Notification id={id} />, store),
    );

    expect(container.querySelectorAll('.notification')).toHaveLength(1);
    expect(getByTestId('fallbackIcon')).toBeInTheDocument();
  });
});

const mapNotificationsStateToRootState = (
  domainState: NotificationsState,
): Partial<RootState> => {
  return {
    notificationsState: domainState,
  };
};
