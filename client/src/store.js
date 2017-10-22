import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';


// Create store and incorporate middleware
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, logger),
));


export default store
