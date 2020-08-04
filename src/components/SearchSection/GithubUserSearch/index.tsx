import React from 'react';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { useSearchUserForm } from './hook';
import styles from './styles.module.scss';
import SearchIcon from '@material-ui/icons/Search';

export const GithubUserSearch = (): React.ReactElement => {
  const { onSetSearchValue, onSubmit, searchValue } = useSearchUserForm();

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <TextInput
        placeholder="Search for users"
        icon={SearchIcon}
        value={searchValue}
        onChange={onSetSearchValue}
      />
      <Button caption="Search" onClick={onSubmit} type="submit" />
    </form>
  );
};
