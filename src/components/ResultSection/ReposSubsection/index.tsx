import React from 'react';
import styles from './styles.module.scss';
import { useUserRepos } from '../hooks/useUserRepos';
import { RepositoryEntry } from './RepositoryEntry';

export const ReposSubsection: React.FC = (): React.ReactElement => {
  const repositories = useUserRepos();

  return (
    <div className={styles.repositoriesSubsection}>
      <h3 className={styles.heading}>Top repositories</h3>
      {repositories.map(repo => (
        <RepositoryEntry id={repo.id} key={repo.id} />
      ))}
    </div>
  );
};
