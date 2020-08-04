import { selectCurrentGhUserRepositories } from '../../../store/ghUser/selectors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';
import { GhRepository } from '../../../store/ghUser/types';

export const useUserRepos = (): GhRepository[] => {
  return useSelector((state: RootState) =>
    selectCurrentGhUserRepositories(state),
  );
};
