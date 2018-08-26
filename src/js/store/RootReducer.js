// library stuff
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// grab app reducers
import app from 'store/reducers/App.reducer';
import games from 'store/reducers/Games.reducer';

// mash them together
const rootReducer = combineReducers({
  app,
  games,
  route: routerReducer
});

// export
export default rootReducer;
