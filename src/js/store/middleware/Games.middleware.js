// constants
import * as AppConstants from 'constants/AppConstants';

// models
import { ScreenModel } from 'store/models/Screen.model';
import { GameModel } from 'store/models/Game.model';

// actions
import * as GamesActions from 'store/actions/Games.actions';
import * as ScreensActions from 'store/actions/Screens.actions';

// INTERNAL METHODS
const createGame = ({ dispatch }) => {
  const screenids = [];
  const screenModels = AppConstants.MANDATORY_SCREENS.map((screenType) => {
    const screen = new ScreenModel({ screenType });
    screenids.push(screen.id);
    return screen;
  });

  const gameModel = GameModel({ screens: screenids });
  dispatch(ScreensActions.AddScreens({ screenModels }));
  dispatch(GamesActions.AddGame({ gameModel }));
};

// MIDDLEWARE SWITCHES
const GamesMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case GamesActions.CREATE_NEW_GAME:
      createGame({ dispatch });
      break;
  }
};

export default [GamesMiddleware];
