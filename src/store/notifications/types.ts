export interface NotificationsState {
  notifications: Notification[];
}

export interface Notification {
  notificationType: NotificationType;
  textContent: string;
  id: string;
}

export enum NotificationType {
  SUCCESS = 'success',
  FAILURE = 'failure',
}
