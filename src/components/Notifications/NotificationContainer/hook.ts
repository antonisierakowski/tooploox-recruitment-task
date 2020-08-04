import { useSelector } from 'react-redux';
import { Notification } from '../../../store/notifications/types';
import { selectNotifications } from '../../../store/notifications/selectors';

export const useNotifications = (): Notification[] => {
  const notifications = useSelector(selectNotifications);
  return notifications;
};
