import React from 'react';
import styles from './styles.module.scss';
import { useNotifications } from './hook';
import { Notification } from '../Notification';
import { Notification as NotificationInterface } from '../../../store/notifications/types';

export const NotificationContainer: React.FC = () => {
  const notifications = useNotifications();
  return (
    <div className={styles.notificationContainer}>
      {notifications.map(notificationMapper)}
    </div>
  );
};

const notificationMapper = (notification: NotificationInterface) => (
  <Notification id={notification.id} key={notification.id} />
);
