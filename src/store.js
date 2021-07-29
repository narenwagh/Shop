import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/root-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  reducer,
  form: formReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
