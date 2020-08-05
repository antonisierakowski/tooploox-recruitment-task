import { RootState } from '../store/types';
import { notificationStateFixture } from './notifiationStateFixture';

export const rootStateFixture: RootState = {
  notificationsState: notificationStateFixture,
  ghUserState: null, // todo add once needed
};
