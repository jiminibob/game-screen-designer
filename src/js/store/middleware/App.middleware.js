// libs
import { push } from 'connected-react-router';

// constants
import * as AppUrls from 'constants/AppUrls';

// models
import { GenerateRandomGames } from 'store/models/Test.model';

// actions
import * as AppActions from 'store/actions/App.actions';
import * as GamesActions from 'store/actions/Games.actions';

// INTERNAL METHODS
const startBoot = ({ dispatch }) => {
  dispatch(GamesActions.SetGames(GenerateRandomGames()));
  dispatch(AppActions.CompleteBoot());
};

// MIDDLEWARE SWITCHES
const AppMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case AppActions.BOOT_INIT:
      startBoot({ dispatch });
      break;
  }
};

const ActionRedirects = ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case AppActions.VIEW_GAMES:
      dispatch(push(AppUrls.URL_GAMES));
      break;
    case AppActions.VIEW_GAME:
      dispatch(push(AppUrls.GetUrlGame(action.payload)));
      break;
  }
};

export default [AppMiddleware, ActionRedirects];
