export const VIEW_GAMES = '[NAV] VIEW_GAMES';
export const VIEW_GAME = '[NAV] VIEW_GAME';
export const VIEW_GAME_SETTINGS = '[NAV] VIEW_GAME_SETTINGS';

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
