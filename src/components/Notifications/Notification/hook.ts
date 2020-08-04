import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../../../store/types';
import { selectNotification } from '../../../store/notifications/selectors';
import { removeNotification } from '../../../store/notifications/actions';
import { Notification } from '../../../store/notifications/types';

export interface UseNotification {
  notification: Notification;
  onClose: () => void;
}

export const useNotification = (id: string): UseNotification => {
  const notification = useSelector((state: RootState) =>
    selectNotification(state, id),
  );

  const dispatch = useDispatch();

  const onClose = useCallback(
    () => dispatch(removeNotification({ id: notification.id })),
    [dispatch, notification.id],
  );

  return {
    notification,
    onClose,
  };
};

removeNotification({ id: '123' });
