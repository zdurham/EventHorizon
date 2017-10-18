import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducers from './reducers/authReducers'
import { composeWithDevTools } from 'redux-devtools-extension';

// Create store and incorporate middleware
const store = createStore(authReducers, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store
