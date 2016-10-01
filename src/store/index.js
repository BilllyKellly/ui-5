import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  routerReducer as routing,
  routerMiddleware,
} from 'react-router-redux';
import { browserHistory } from 'react-router';
import appReducer, { REDUCER_KEY } from 'reducers';

const loggerMiddleware = createLogger();

const reducer = combineReducers({
  [REDUCER_KEY]: appReducer,
  routing,
});

export default createStore(reducer, compose(
  applyMiddleware(thunkMiddleware),
  applyMiddleware(loggerMiddleware),
  applyMiddleware(routerMiddleware(browserHistory)),
  // This enables the redux dev tools extension, or does nothing if not installed
  window.devToolsExtension ? window.devToolsExtension() : f => f
));