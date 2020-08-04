import React from 'react';
import styles from './styles.module.scss';
import { useUserAvatarUrl } from '../../hooks/useUserAvatarUrl';

export const UserAvatar: React.FC = (): React.ReactElement => {
  const url = useUserAvatarUrl();
  return (
    <div className={styles.imageContainer}>
      <img alt="Github user avatar" src={url} className={styles.image} />
    </div>
  );
};
