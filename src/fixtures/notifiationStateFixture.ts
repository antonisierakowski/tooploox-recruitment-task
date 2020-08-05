import {
  NotificationsState,
  NotificationType,
} from '../store/notifications/types';

export const notificationStateFixture: NotificationsState = {
  notifications: [
    {
      id: '1',
      notificationType: NotificationType.SUCCESS,
      textContent: 'test1',
    },
    {
      id: '2',
      notificationType: NotificationType.FAILURE,
      textContent: 'test2',
    },
    {
      id: '3',
      notificationType: NotificationType.FAILURE,
      textContent: 'test3',
    },
  ],
};

export const onlySuccessNotificationStateFixture: NotificationsState = {
  notifications: [
    {
      id: '1',
      notificationType: NotificationType.SUCCESS,
      textContent: 'test1',
    },
  ],
};

export const onlyFailureNotificationStateFixture: NotificationsState = {
  notifications: [
    {
      id: '1',
      notificationType: NotificationType.FAILURE,
      textContent: 'test1',
    },
  ],
};

export const onlyUnexpectedTypeNotificationStateFixture: NotificationsState = {
  notifications: [
    {
      id: '1',
      notificationType: 'test' as NotificationType,
      textContent: 'test1',
    },
  ],
};
