import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, autoRehydrate } from 'redux-persist';


// const persistState = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}


// Create store and incorporate middleware
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
  autoRehydrate()
));

persistStore(store)

export default store
