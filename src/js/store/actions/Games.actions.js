//constants
export const SET_GAMES = '[GAMES] SET_GAMES';
export const UPDATE_GAME_SETTINGS = '[GAMES] UPDATE_GAME_SETTINGS';

// actions
export const SetGames = (games) => ({
  type: SET_GAMES,
  payload: games
});

export const UpdateGameSettings = ({ gameid, updatedSettings }) => ({
  type: UPDATE_GAME_SETTINGS,
  payload: { gameid, updatedSettings }
});
