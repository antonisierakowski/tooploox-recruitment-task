import React from 'react';
import styles from './styles.module.scss';
import { UserAvatar } from './UserAvatar';
import { UserBio } from './UserBio';
import { UserNameHeader } from './UserNameHeader';

export const UserSubsection: React.FC = (): React.ReactElement => (
  <div className={styles.userSubsection}>
    <div className={styles.nameAndAvatar}>
      <UserAvatar />
      <UserNameHeader />
    </div>
    <UserBio />
  </div>
);
