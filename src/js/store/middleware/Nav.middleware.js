// libs
import { push } from 'connected-react-router';

// actions
import * as NavActions from 'store/actions/Nav.actions';

// constants
import * as AppUrls from 'constants/AppUrls';

// INTERNAL METHODS
const redirect = (dispatch, url) => {
  dispatch(push(url));
};

// MIDDLEWARE SWITCHES
const NavMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case NavActions.VIEW_GAMES:
      redirect(dispatch, AppUrls.URL_GAMES);
      break;
    case NavActions.VIEW_GAME:
      redirect(dispatch, AppUrls.GetUrlGame(action.payload));
      break;
    case NavActions.VIEW_GAME_SETTINGS:
      redirect(dispatch, AppUrls.GetUrlGameSettings(action.payload));
      break;
    case NavActions.VIEW_GAME_ASSETS:
      redirect(dispatch, AppUrls.GetUrlGameAssets(action.payload));
      break;
    case NavActions.VIEW_GAME_SCREENS:
      redirect(dispatch, AppUrls.GetUrlGameScreens(action.payload));
      break;
  }
};

export default [NavMiddleware];
