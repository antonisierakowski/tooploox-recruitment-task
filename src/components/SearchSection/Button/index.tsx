import React, { SyntheticEvent } from 'react';
import styles from './styles.module.scss';

type Props = {
  caption: string;
  onClick: (event: SyntheticEvent, ...args: any[]) => void;
  type?: 'submit' | 'button';
};

export const Button: React.FC<Props> = (props: Props): React.ReactElement => (
  <button className={styles.button} onClick={props.onClick} type={props.type}>
    {props.caption}
  </button>
);
