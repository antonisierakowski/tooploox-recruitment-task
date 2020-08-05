import React, { FormEvent } from 'react';
import styles from './styles.module.scss';

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  icon?: any;
};

export const TextInput: React.FC<Props> = (
  props: Props,
): React.ReactElement => (
  <>
    {props.icon && <props.icon className={styles.icon} />}
    <input
      className={`${styles.textInput} ${props.icon && styles.inputWithIcon}`}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </>
);
