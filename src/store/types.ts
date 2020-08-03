import { GhUserState } from './ghUser/types';
import { NotificationsState } from './notifications/types';

export interface RootState {
  // ghUserState: GhUserState;
  notificationsState: NotificationsState;
}

export interface Action<TPayload = any> {
  type: string;
  payload?: TPayload;
}
