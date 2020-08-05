import { Error, Done, Info, Close } from '@material-ui/icons';
import React from 'react';
import styles from './styles.module.scss';
import { NotificationType } from '../../../store/notifications/types';
import { useNotification } from './hook';

type Props = {
  id: string;
};

export const Notification: React.FC<Props> = ({ id }) => {
  const { notification, onClose } = useNotification(id);

  return (
    <div className={styles.notification} data-testid={id}>
      <div className={styles.notificationBody}>
        {getIconType(notification.notificationType)}
        <p className={styles.notificationText}>{notification.textContent}</p>
      </div>
      <Close
        className={styles.closeIcon}
        onClick={onClose}
        data-testid={`closeIcon_${id}`}
      />
    </div>
  );
};

const getIconType = (notificationType: NotificationType) => {
  switch (notificationType) {
    case NotificationType.SUCCESS: {
      return <Done data-testid="successIcon" />;
    }
    case NotificationType.FAILURE: {
      return <Error data-testid="failureIcon" />;
    }
    default: {
      return <Info data-testid="fallbackIcon" />;
    }
  }
};
