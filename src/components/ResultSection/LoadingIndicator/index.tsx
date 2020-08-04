import React from 'react';
import styles from './styles.module.scss';
import { CircularProgress } from '@material-ui/core';

export const LoadingIndicator: React.FC = (): React.ReactElement => (
  <div className={styles.loadingIndicatorContainer}>
    <CircularProgress />
  </div>
);
