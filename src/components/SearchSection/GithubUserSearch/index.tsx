import React from 'react';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { useSearchUserForm } from './hook';
import styles from './styles.module.scss';
import SearchIcon from '@material-ui/icons/Search';

export const GithubUserSearch = (): React.ReactElement => {
  const hook = useSearchUserForm();

  return (
    <form className={styles.form}>
      <TextInput placeholder="Search for users" icon={SearchIcon} />
      <Button caption="Search" />
    </form>
  );
};
