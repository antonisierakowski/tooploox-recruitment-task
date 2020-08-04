import {
  selectIsLoading,
  selectShouldRenderResults,
} from '../../../store/ghUser/selectors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/types';

type UseShouldRenderResultsHook = {
  shouldRenderResults: boolean;
  isLoading: boolean;
};

export const useShouldRenderResults = (): UseShouldRenderResultsHook => {
  return {
    shouldRenderResults: useSelector((state: RootState) =>
      selectShouldRenderResults(state),
    ),
    isLoading: useSelector((state: RootState) => selectIsLoading(state)),
  };
};
