import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
  user: { userData: loadFromStorage() },
};
const middleware = [thunk];

function loadFromStorage() {
  try {
    const serializedState = localStorage.getItem('userInformations');
    if (serializedState === null) return undefined;
    return serializedState;
  } catch (error) {
  }
}


const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
