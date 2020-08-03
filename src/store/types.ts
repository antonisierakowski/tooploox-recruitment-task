import { GhUserState } from './ghUser/types';
import { NotificationsState } from './notifications/types';

export interface RootState {
  // ghUser: GhUserState;
  // notifications: NotificationsState
}

export interface Action<TPayload = any> {
  type: string;
  payload?: TPayload;
}
