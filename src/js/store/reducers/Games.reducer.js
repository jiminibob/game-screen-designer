// actions
import * as GamesActions from 'store/actions/Games.actions';
import * as Utils from 'store/reducers/utils.reducer';

// default state
const initState = {
  entries: []
};

// reducer
const AppReducer = (state = initState, action) => {
  const nextState = {};

  switch (action.type) {
    case GamesActions.ADD_GAMES:
      nextState.entries = Utils.AddEntries({ entries: state.entries, newEntries: action.payload });
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
  }

  return state;
};

const AddTextureToGameEntry = ({ state, gameid, textureid }) => {
  const game = { ...state.entries[gameid] };
  game.textures = [...game.textures, textureid];
  const entries = { ...state.entries };
  entries[gameid] = game;
  return entries;
};
const AddTexturesToGameEntry = ({ state, gameid, textures }) => {
  const game = { ...state.entries[gameid] };
  game.textures = [...game.textures, ...textures];
  const entries = { ...state.entries };
  entries[gameid] = game;
  return entries;
};

export default AppReducer;
