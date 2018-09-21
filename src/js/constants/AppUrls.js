// URLS
export const URL_HOME = '/';
export const URL_GAMES = '/games/';
export const URL_APP_SETTINGS = '/settings/';

// MODALS
export const MODAL_CREATE_GAME = 'MODAL_CREATE_GAME';

// URL PROPS
export const URL_PROP_GAMEID = 'gameid';
export const URL_PROP_ASSETID = 'assetid';
export const URL_PROP_SCREENID = 'screenid';

// URL METHODS
export const GetUrlGame = (gameid) => {
  return URL_GAMES + (gameid || ':' + URL_PROP_GAMEID) + '/';
};
export const GetUrlGameAssets = (gameid) => {
  return URL_GAMES + (gameid || ':' + URL_PROP_GAMEID) + '/assets/';
};
export const GetUrlGameAsset = (gameid, assetid) => {
  return GetUrlGameAssets(gameid) + (assetid || ':' + URL_PROP_ASSETID) + '/';
};
export const GetUrlGameScreens = (gameid) => {
  return URL_GAMES + (gameid || ':' + URL_PROP_GAMEID) + '/screens/';
};
export const GetUrlGameScreen = (gameid, screenid) => {
  return GetUrlGameScreens(gameid) + (screenid || ':' + URL_PROP_SCREENID) + '/';
};
export const GetUrlGameSettings = (gameid) => {
  return URL_GAMES + (gameid || ':' + URL_PROP_GAMEID) + '/settings/';
};
