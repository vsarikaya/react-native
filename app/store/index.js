import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = createLogger({
  collapsed: true,
  duration: true
});

const middleWare = applyMiddleware(thunk, logger);

export default function configureStore(initialState: State): Store {
  const store = createStore(
    reducers,
    initialState,
    compose(middleWare)
  );

  return store;
}
