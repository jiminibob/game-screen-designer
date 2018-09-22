// library stuff
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// grab app reducers
import app from 'store/reducers/App.reducer';
import games from 'store/reducers/Games.reducer';
import screens from 'store/reducers/Screens.reducer';

// mash them together
const rootReducer = combineReducers({
  app,
  games,
  screens,
  route: routerReducer
});

// export
export default rootReducer;
