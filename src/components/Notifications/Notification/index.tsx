import { Error, Done, Info, Close } from '@material-ui/icons';
import React from 'react';
import styles from './styles.module.css';
import { NotificationType } from '../../../store/notifications/types';
import { useNotification } from './hook';

type Props = {
  id: string;
};

export const Notification: React.FC<Props> = ({ id }) => {
  const { notification, onClose } = useNotification(id);

  return (
    <div className={styles.notification}>
      <div className={styles.notificationBody}>
        {getIconType(notification.notificationType)}
        <p className={styles.notificationText}>{notification.textContent}</p>
      </div>
      <Close className={styles.closeIcon} onClick={onClose} />
    </div>
  );
};

const getIconType = (notificationType: NotificationType) => {
  switch (notificationType) {
    case NotificationType.SUCCESS: {
      return <Done />;
    }
    case NotificationType.FAILURE: {
      return <Error />;
    }
    default: {
      return <Info />;
    }
  }
};
