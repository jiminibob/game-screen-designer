//constants
export const SET_GAMES = '[GAMES] SET_GAMES';
export const UPDATE_GAME_SETTINGS = '[GAMES] UPDATE_GAME_SETTINGS';
export const UPLOAD_IMAGE_ASSETS = '[GAMES] UPLOAD_IMAGE_ASSETS';
export const ADD_IMAGE_ASSETS = '[GAMES] ADD_IMAGE_ASSETS';

// actions
export const SetGames = (games) => ({
  type: SET_GAMES,
  payload: games
});

export const UpdateGameSettings = ({ gameid, updatedSettings }) => ({
  type: UPDATE_GAME_SETTINGS,
  payload: { gameid, updatedSettings }
});

export const UploadImageAssets = ({ gameid, files }) => ({
  type: UPLOAD_IMAGE_ASSETS,
  payload: { gameid, files }
});

export const AddImageAssets = ({ gameid, assets }) => ({
  type: ADD_IMAGE_ASSETS,
  payload: { gameid, assets }
});
