import { RootState } from '../store/types';
import { notificationStateFixture } from './notifiationStateFixture';
import { ghUserStateFixture } from './ghUserStateFixture';

export const rootStateFixture: RootState = {
  notificationsState: notificationStateFixture,
  ghUserState: ghUserStateFixture,
};
