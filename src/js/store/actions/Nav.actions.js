//constants
export const VIEW_GAMES = '[NAV] VIEW_GAMES';
export const VIEW_GAME = '[NAV] VIEW_GAME';
export const VIEW_GAME_SETTINGS = '[NAV] VIEW_GAME_SETTINGS';
export const VIEW_GAME_ASSETS = '[NAV] VIEW_GAME_ASSETS';
export const VIEW_GAME_SCREENS = '[NAV] VIEW_GAME_SCREENS';
export const VIEW_GAME_SCREEN = '[NAV] VIEW_GAME_SCREEN';

//actions
export const ViewGames = () => ({
  type: VIEW_GAMES
});

export const ViewGame = (gameid) => ({
  type: VIEW_GAME,
  payload: gameid
});

export const ViewGameSettings = (gameid) => ({
  type: VIEW_GAME_SETTINGS,
  payload: gameid
});

export const ViewGameAssets = (gameid) => ({
  type: VIEW_GAME_ASSETS,
  payload: gameid
});
export const ViewGameScreens = (gameid) => ({
  type: VIEW_GAME_SCREENS,
  payload: gameid
});
export const ViewGameScreen = ({ gameid, screenid }) => ({
  type: VIEW_GAME_SCREEN,
  payload: { gameid, screenid }
});
