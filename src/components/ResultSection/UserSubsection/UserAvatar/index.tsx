import React from 'react';
import styles from './styles.module.scss';
import { useUserAvatarUrl } from '../../hooks/useUserAvatarUrl';

export const UserAvatar: React.FC = (): React.ReactElement => {
  const url = useUserAvatarUrl();
  return <img alt="Github user avatar" src={url} />;
};
