import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './utils/localStorage'

const persistState = loadState();

// Create store and incorporate middleware
const store = createStore(reducers, persistState, composeWithDevTools(
  applyMiddleware(thunk),
));

store.subscribe(() => {
  saveState(store.getState());
})


export default store
