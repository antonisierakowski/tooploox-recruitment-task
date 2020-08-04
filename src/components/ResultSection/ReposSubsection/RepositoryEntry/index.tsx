import React from 'react';
import styles from './styles.module.scss';
import { useUserRepo } from '../../hooks/useUserRepo';

type Props = {
  id: number;
};

export const RepositoryEntry: React.FC<Props> = ({
  id,
}: Props): React.ReactElement => {
  const repo = useUserRepo(id);

  return <div className={styles.repository}>{repo.name}</div>;
};
