// models
import { GenerateRandomGames } from 'store/models/Test.model';

// actions
import * as AppActions from 'store/actions/App.actions';
import * as GamesActions from 'store/actions/Games.actions';
import * as ScreensActions from 'store/actions/Screens.actions';

// INTERNAL METHODS

// start app boot, loads and sets releavant data needed to run
const startBoot = ({ dispatch }) => {
  const generatedGameData = GenerateRandomGames();

  dispatch(ScreensActions.AddScreens({ screenModels: generatedGameData.screens }));
  dispatch(GamesActions.AddGames({ games: generatedGameData.games }));
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

export default [AppMiddleware];
