import {
  selectIsLoading,
  selectShouldRenderUserRepositoriesResults,
  selectShouldRenderUserResults,
} from '../../../store/ghUser/selectors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';

type UseShouldRenderResultsHook = {
  shouldRenderUserResults: boolean;
  shouldRenderRepositoriesResults: boolean;
  isLoading: boolean;
};

export const useShouldRenderResults = (): UseShouldRenderResultsHook => {
  return {
    shouldRenderUserResults: useSelector((state: RootState) =>
      selectShouldRenderUserResults(state),
    ),
    shouldRenderRepositoriesResults: useSelector((state: RootState) =>
      selectShouldRenderUserRepositoriesResults(state),
    ),
    isLoading: useSelector((state: RootState) => selectIsLoading(state)),
  };
};
