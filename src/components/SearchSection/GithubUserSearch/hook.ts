import React, { FormEvent, SyntheticEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { searchUserData } from '../../../store/ghUser/actions';

type UseSearchUserFormHook = {
  onSetSearchValue: (event: FormEvent<HTMLInputElement>) => void;
  onSubmit: (event: SyntheticEvent) => void;

  searchValue: string;
};

export const useSearchUserForm = (): UseSearchUserFormHook => {
  const [searchValue, setSearchValue] = React.useState<string>('');

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      dispatch(
        searchUserData({
          userName: searchValue,
        }),
      );
    },
    [dispatch, searchValue],
  );

  const onSetSearchValue = (event: FormEvent<HTMLInputElement>): void => {
    setSearchValue(event.currentTarget.value);
  };

  return {
    onSetSearchValue,
    onSubmit,

    searchValue,
  };
};
