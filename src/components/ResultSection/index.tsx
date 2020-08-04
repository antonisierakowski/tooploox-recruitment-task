import React from 'react';
import styles from './styles.module.scss';
import { ReposSubsection } from './ReposSubsection';
import { UserSubsection } from './UserSubsection';
import { useShouldRenderResults } from './hooks/useShouldRenderResults';
import { LoadingIndicator } from './LoadingIndicator';

export const ResultSection: React.FC = (): React.ReactElement => {
  const { shouldRenderResults, isLoading } = useShouldRenderResults();

  if (isLoading) {
    return (
      <section className={styles.section}>
        <LoadingIndicator />
      </section>
    );
  }

  if (shouldRenderResults) {
    return (
      <section className={styles.section}>
        <UserSubsection />
        <ReposSubsection />
      </section>
    );
  }

  return null;
};
