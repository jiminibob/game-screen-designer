// actions
import * as GamesActions from 'store/actions/Games.actions';
import * as Utils from 'store/reducers/utils.reducer';

// default state
const initState = {
  entries: [],
  imageAssets: []
};

// reducer
const AppReducer = (state = initState, action) => {
  const nextState = {};

  switch (action.type) {
    case GamesActions.ADD_GAMES:
      nextState.entries = Utils.AddEntries({ entries: state.entries, newEntries: action.payload });
      return { ...state, ...nextState };
    case GamesActions.ADD_GAME:
      nextState.entries = Utils.AddEntry({ entries: state.entries, newEntry: action.payload });
      return { ...state, ...nextState };
    case GamesActions.SET_GAMES:
      nextState.entries = action.payload;
      return { ...state, ...nextState };
    case GamesActions.UPDATE_GAME_SETTINGS:
      nextState.entries = Utils.UpdateEntryValues({
        entries: state.entries,
        entryid: action.payload.gameid,
        updatedValues: action.payload.updatedValues
      });
      return { ...state, ...nextState };
    case GamesActions.ADD_TEXTURE:
      nextState.entries = AddTextureToGameEntry({ state, ...action.payload });
      return { ...state, ...nextState };
    case GamesActions.ADD_TEXTURES:
      nextState.entries = AddTexturesToGameEntry({ state, ...action.payload });
      return { ...state, ...nextState };
    case GamesActions.ADD_IMAGE_ASSETS:
      // nextState.entries = AddImageAssetsToGameEntry({ state, ...action.payload });
      return { ...state, ...AddImageAssetsToGameEntry({ state, ...action.payload }) };
  }

  return state;
};

const AddTextureToGameEntry = ({ state, gameid, textureid }) => {
  const game = state.entries[gameid];
  const updated = { textures: [...game.textures, textureid] };
  return Utils.UpdateEntryValues({
    entries: state.entries,
    entryid: gameid,
    updatedValues: updated
  });
};
const AddTexturesToGameEntry = ({ state, gameid, textureids }) => {
  const game = state.entries[gameid];
  const updated = { textures: [...game.textures, ...textureids] };
  return Utils.UpdateEntryValues({
    entries: state.entries,
    entryid: gameid,
    updatedValues: updated
  });
};
const AddImageAssetsToGameEntry = ({ state, gameid, assets }) => {
  const game = state.entries[gameid];
  const updated = {
    imageAssets: [
      ...game.imageAssets,
      ...assets.map((asset) => {
        return asset.id;
      })
    ]
  };
  const entries = Utils.UpdateEntryValues({
    entries: state.entries,
    entryid: gameid,
    updatedValues: updated
  });
  const imageAssets = Utils.AddEntries({
    entries: state.imageAssets,
    newEntries: assets
  });

  return { entries, imageAssets };
};

export default AppReducer;
