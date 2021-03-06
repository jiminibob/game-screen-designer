// App constant
import { ORIENTATION_LANDSCAPE } from 'constants/AppConstants';

//constants
export const ADD_GAMES = '[GAMES] ADD_GAMES';
export const ADD_GAME = '[GAMES] ADD_GAME';
export const CREATE_NEW_GAME = '[GAMES] CREATE_NEW_GAME';
export const ADD_TEXTURE = '[GAMES] ADD_TEXTURE';
export const ADD_TEXTURES = '[GAMES] ADD_TEXTURES';
export const UPDATE_GAME_SETTINGS = '[GAMES] UPDATE_GAME_SETTINGS';
export const UPLOAD_IMAGE_ASSETS = '[GAMES] UPLOAD_IMAGE_ASSETS';
export const ADD_IMAGE_ASSETS = '[GAMES] ADD_IMAGE_ASSETS';

// actions
export const AddGames = ({ games }) => ({
  type: ADD_GAMES,
  payload: games
});
export const AddGame = ({ gameModel }) => ({
  type: ADD_GAME,
  payload: gameModel
});

export const CreateNewGame = ({ name, orientation = ORIENTATION_LANDSCAPE }) => ({
  type: CREATE_NEW_GAME,
  payload: { name, orientation }
});

export const UpdateGameSettings = ({ gameid, updatedValues }) => ({
  type: UPDATE_GAME_SETTINGS,
  payload: { gameid, updatedValues: updatedValues }
});

export const UploadImageAssets = ({ gameid, files }) => ({
  type: UPLOAD_IMAGE_ASSETS,
  payload: { gameid, files }
});

export const AddImageAssets = ({ gameid, assets }) => ({
  type: ADD_IMAGE_ASSETS,
  payload: { gameid, assets }
});

export const AddTexture = ({ gameid, textureid }) => ({
  type: ADD_TEXTURE,
  payload: { gameid, textureid }
});

export const AddTextures = ({ gameid, textureModels }) => ({
  type: ADD_TEXTURES,
  payload: { gameid, textureModels }
});
