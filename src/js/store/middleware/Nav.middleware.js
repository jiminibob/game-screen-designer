// libs
import { push, replace } from 'connected-react-router';

// actions
import * as NavActions from 'store/actions/Nav.actions';
import * as GamesActions from 'store/actions/Games.actions';

// constants
import * as AppUrls from 'constants/AppUrls';

// INTERNAL METHODS

// navigate to a new url
const redirect = (dispatch, state, url) => {
  if (state.route.location.pathname === url) {
    setUrlState(dispatch, url);
  } else {
    dispatch(push(url));
  }
};

const setUrlState = (dispatch, url) => {
  dispatch(replace(url));
};

// MIDDLEWARE SWITCHES
const NavMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);
  const state = getState();

  switch (action.type) {
    case NavActions.VIEW_GAMES:
      redirect(dispatch, state, AppUrls.URL_GAMES);
      break;
    case NavActions.VIEW_GAME:
      redirect(dispatch, state, AppUrls.GetUrlGame(action.payload));
      break;
    case NavActions.VIEW_GAME_SETTINGS:
      redirect(dispatch, state, AppUrls.GetUrlGameSettings(action.payload));
      break;
    case NavActions.VIEW_GAME_ASSETS:
      redirect(dispatch, state, AppUrls.GetUrlGameAssets(action.payload));
      break;
    case NavActions.VIEW_GAME_SCREENS:
      redirect(dispatch, state, AppUrls.GetUrlGameScreens(action.payload));
      break;
    case NavActions.VIEW_GAME_SCREEN:
      redirect(
        dispatch,
        state,
        AppUrls.GetUrlGameScreen(action.payload.gameid, action.payload.screenid)
      );
      break;
    case NavActions.VIEW_CREATE_GAME:
      setUrlState(dispatch, {
        pathname: state.route.location.pathname,
        state: { modal: AppUrls.MODAL_CREATE_GAME }
      });
      break;
    case NavActions.VIEW_CREATE_IMAGE_ASSET:
      setUrlState(dispatch, {
        pathname: state.route.location.pathname,
        state: { modal: AppUrls.MODAL_CREATE_IMAGE_ASSET }
      });
      break;
    case NavActions.CLOSE_MODAL:
      setUrlState(dispatch, state.route.location.pathname);
      break;
  }
};

export default [NavMiddleware];
