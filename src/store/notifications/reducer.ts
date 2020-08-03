import { Reducer } from 'redux';
import { NotificationsState } from './types';
import { Action } from '../types';
import { CREATE_NOTIFICATION_SUCCESS, REMOVE_NOTIFICATION } from './constants';

const initialState: NotificationsState = {
  notifications: [],
};

export const notificationsReducer: Reducer<NotificationsState, Action> = (
  state: NotificationsState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case CREATE_NOTIFICATION_SUCCESS: {
      return {
        notifications: [...state.notifications, { ...action.payload }],
      };
    }
    case REMOVE_NOTIFICATION: {
      const { id } = action.payload;
      const updatedNotifications = state.notifications.filter(
        notification => notification.id !== id,
      );
      return {
        notifications: updatedNotifications,
      };
    }
    default: {
      return state;
    }
  }
};
