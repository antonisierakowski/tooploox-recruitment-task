import { selectAvatarUrl } from '../../../store/ghUser/selectors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';

export const useUserAvatarUrl = (): string => {
  return useSelector((state: RootState) => selectAvatarUrl(state));
};
