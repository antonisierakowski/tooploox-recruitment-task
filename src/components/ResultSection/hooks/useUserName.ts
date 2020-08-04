import { selectGhUserName } from '../../../store/ghUser/selectors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';

export const useUserName = (): string => {
  return useSelector((state: RootState) => selectGhUserName(state));
};
