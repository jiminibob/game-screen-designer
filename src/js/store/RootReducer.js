// library stuff
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// grab app reducers
import app from 'store/reducers/App.reducer';

// mash them together
const rootReducer = combineReducers({
  app,
  route: routerReducer
});

// export
export default rootReducer;
