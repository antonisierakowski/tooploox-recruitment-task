import React from 'react';
import styles from './styles.module.scss';
import { useUserBio } from '../../hooks/useUserBio';

export const UserBio: React.FC = (): React.ReactElement => {
  const bio = useUserBio();

  return <p>{bio}</p>;
};
