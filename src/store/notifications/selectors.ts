import { RootState } from '../types';
import { Notification } from './types';

export const selectNotifications = (state: RootState): Notification[] =>
  state.notificationsState.notifications;

export const selectNotification = (
  state: RootState,
  id: string,
): Notification => {
  const notifications = selectNotifications(state);
  return notifications.find(notification => notification.id === id);
};
