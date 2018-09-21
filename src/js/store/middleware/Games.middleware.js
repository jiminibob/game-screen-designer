// constants
import * as AppConstants from 'constants/AppConstants';

// models
import { ScreenModel } from 'store/models/Screen.model';
import { GameModel } from 'store/models/Game.model';

// actions
import * as GamesActions from 'store/actions/Games.actions';
import * as ScreensActions from 'store/actions/Screens.actions';
import * as NavActions from 'store/actions/Nav.actions';

// selectors
import * as GamesSelectors from 'store/selectors/Games.selectors';

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

const validateGame = ({ dispatch, state, gameid }) => {
  console.log(GamesSelectors.GetGameById({ state, gameid }));
};

// MIDDLEWARE SWITCHES
const GamesMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case GamesActions.CREATE_NEW_GAME:
      createGame({ dispatch, ...action.payload });
      break;
    case GamesActions.UPDATE_GAME_SETTINGS:
      // todo GAME VALIDATION
      // validateGame({ state: getState(), dispatch, gameid: action.payload.gameid });
      break;
  }
};

export default [GamesMiddleware];
