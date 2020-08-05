import React from 'react';
import styles from './styles.module.scss';
import { ReposSubsection } from './ReposSubsection';
import { UserSubsection } from './UserSubsection';
import { useShouldRenderResults } from './hooks/useShouldRenderResults';
import { LoadingIndicator } from './LoadingIndicator';

export const ResultSection: React.FC = (): React.ReactElement => {
  const {
    shouldRenderUserResults,
    shouldRenderRepositoriesResults,
    isLoading,
  } = useShouldRenderResults();

  return (
    <section className={styles.section}>
      {isLoading && <LoadingIndicator />}
      {shouldRenderUserResults && <UserSubsection />}
      {shouldRenderRepositoriesResults && <ReposSubsection />}
    </section>
  );
};
