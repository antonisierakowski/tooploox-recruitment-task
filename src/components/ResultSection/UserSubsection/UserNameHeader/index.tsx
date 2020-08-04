import React from 'react';
import styles from './styles.module.scss';
import { useUserName } from '../../hooks/useUserName';

export const UserNameHeader: React.FC = (): React.ReactElement => {
  const userName = useUserName();

  return <h4 className={styles.heading}>{userName}</h4>;
};
