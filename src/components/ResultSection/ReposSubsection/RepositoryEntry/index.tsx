import React from 'react';
import styles from './styles.module.scss';
import { useUserRepo } from '../../hooks/useUserRepo';
import StarIcon from '@material-ui/icons/Star';

type Props = {
  id: number;
};

export const RepositoryEntry: React.FC<Props> = ({
  id,
}: Props): React.ReactElement => {
  const { url, name, stars } = useUserRepo(id);

  return (
    <div className={styles.repository}>
      <a href={url}>{name}</a>
      <span className={styles.starsIndicator}>
        <StarIcon className={styles.icon} />
        {stars}
      </span>
    </div>
  );
};
