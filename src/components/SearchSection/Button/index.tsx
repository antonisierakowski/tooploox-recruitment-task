import React from 'react';
import styles from './styles.module.scss';

type Props = {
  caption: string;
};

export const Button: React.FC<Props> = (props: Props): React.ReactElement => (
  <button className={styles.button}>{props.caption}</button>
);
