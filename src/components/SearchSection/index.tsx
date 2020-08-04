import React from 'react';
import { GithubUserSearch } from './GithubUserSearch';
import styles from './styles.module.scss';

export const SearchSection = (): React.ReactElement => (
  <section className={styles.section}>
    <GithubUserSearch />
  </section>
);
