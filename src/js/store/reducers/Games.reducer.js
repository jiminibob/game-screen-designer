// actions
import * as GamesActions from 'store/actions/Games.actions';
import * as Utils from 'store/reducers/utils.reducer';

// default state
const initState = {
  entries: [],
  textures: {},
  imageAssets: {},
  buttonAssets: {}
};

// reducer
const GamesReducer = (state = initState, action) => {
  const nextState = {};

  switch (action.type) {
    case GamesActions.ADD_GAMES:
    case GamesActions.SET_GAMES:
      return { ...state, ...AddGames({ state, games: action.payload }) };
    case GamesActions.ADD_GAME:
      return { ...state, ...AddGame({ state, game: action.payload }) };
    case GamesActions.UPDATE_GAME_SETTINGS:
      return { ...state, ...UpdateGameSettings({ state, ...action.payload }) };
    case GamesActions.ADD_TEXTURES:
      return { ...state, ...AddTexturesToGame({ state, ...action.payload }) };
    case GamesActions.ADD_IMAGE_ASSETS:
      return { ...state, ...AddImageAssetsToGame({ state, ...action.payload }) };
  }

  return state;
};

const AddGame = ({ state, game }) => {
  return { entries: Utils.AddEntry({ entries: state.entries, newEntry: game }) };
};

const AddGames = ({ state, games }) => {
  return { entries: Utils.AddEntries({ entries: state.entries, newEntries: games }) };
};

const UpdateGameSettings = ({ state, gameid, updatedValues }) => {
  const entries = Utils.UpdateEntryValues({
    entries: state.entries,
    entryid: gameid,
    updatedValues: updatedValues
  });
  return { entries };
};

const AddTexturesToGame = ({ state, gameid, textureModels }) => {
  // add to textures
  const textures = Utils.AddEntries({ entries: state.textures, newEntries: textureModels });

  // update game textures
  const game = state.entries[gameid];
  const gameTextures = [...game.textures, ...Utils.MapByProp({ items: textureModels, prop: 'id' })];

  // update entries
  const entries = Utils.UpdateEntryValues({
    entries: state.entries,
    entryid: gameid,
    updatedValues: { textures: gameTextures }
  });

  // return results
  return { entries, textures };
};

const AddImageAssetsToGame = ({ state, gameid, assets }) => {
  // update image assets
  const imageAssets = Utils.AddEntries({ entries: state.imageAssets, newEntries: assets });

  // update game image assets
  const game = state.entries[gameid];
  const updatedImages = [...game.imageAssets, ...Utils.MapByProp({ items: assets, prop: 'id' })];

  // update entries
  const entries = Utils.UpdateEntryValues({
    entries: state.entries,
    entryid: gameid,
    updatedValues: { imageAssets: updatedImages }
  });

  // return results;
  return { entries, imageAssets };
};

export default GamesReducer;
