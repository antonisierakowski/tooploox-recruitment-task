import { selectCurrentGhUserRepository } from '../../../store/ghUser/selectors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';
import { GhRepository } from '../../../store/ghUser/types';

export const useUserRepo = (id: number): GhRepository => {
  return useSelector((state: RootState) =>
    selectCurrentGhUserRepository(state, id),
  );
};
