import { selectGhUserBio } from '../../../store/ghUser/selectors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';

export const useUserBio = (): string => {
  return useSelector((state: RootState) => selectGhUserBio(state));
};
