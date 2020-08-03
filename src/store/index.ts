import { createStore, applyMiddleware, Store } from 'redux';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Action, RootState } from './types';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store: Store<RootState, Action> = createStore(
  rootReducer,
  middleware,
);

export const createPreloadedStore = (
  state: RootState,
): Store<RootState, Action> => createStore(rootReducer, state, middleware);

sagaMiddleware.run(rootSaga);
