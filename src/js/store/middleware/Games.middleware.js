// constants
import * as AppConstants from 'constants/AppConstants';

// models
import { ScreenModel } from 'store/models/Screen.model';
import { GameModel } from 'store/models/Game.model';

// actions
import * as GamesActions from 'store/actions/Games.actions';
import * as ScreensActions from 'store/actions/Screens.actions';
import * as NavActions from 'store/actions/Nav.actions';

// INTERNAL METHODS
const createGame = ({ dispatch, name, orientation }) => {
  // create mandatory game screens
  const screenModels = AppConstants.MANDATORY_SCREENS.map((screenType) => {
    return new ScreenModel({ screenType, name: screenType });
  });

  dispatch(ScreensActions.AddScreens({ screenModels }));

  // create game model based in recieved data, and pass through auto made screens
  const gameModel = GameModel({
    screens: screenModels.map((s) => {
      return s.id;
    }),
    name,
    orientation
  });

  dispatch(GamesActions.AddGame({ gameModel }));
  dispatch(NavActions.ViewGame(gameModel.id));
};

// MIDDLEWARE SWITCHES
const GamesMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case GamesActions.CREATE_NEW_GAME:
      createGame({ dispatch, ...action.payload });
      break;
  }
};

export default [GamesMiddleware];
