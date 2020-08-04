import React from 'react';
import styles from './styles.module.scss';
import { useUserBio } from '../../hooks/useUserBio';
import { useUserName } from '../../hooks/useUserName';

export const UserNameHeader: React.FC = (): React.ReactElement => {
  const userName = useUserName();

  return <h3>{userName}</h3>;
};
