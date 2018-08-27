// actions
import * as GamesActions from 'store/actions/Games.actions';

// default state
const initState = {
  entries: []
};

// reducer
const AppReducer = (state = initState, action) => {
  const nextState = {};

  switch (action.type) {
    case GamesActions.SET_GAMES:
      nextState.entries = action.payload;
      return { ...state, ...nextState };
    case GamesActions.UPDATE_GAME_SETTINGS:
      nextState.entries = updateGame({ games: state.entries, ...action.payload });
      return { ...state, ...nextState };
    case GamesActions.ADD_IMAGE_ASSETS:
      nextState.entries = addGameImageAssets({ state, ...action.payload });
      return { ...state, ...nextState };
  }

  return state;
};

const addGameImageAssets = ({ state, gameid, assets }) => {
  const currentAssets =
    getArrayObjectPropValue({
      gameid,
      propid: 'imageAssets',
      objects: state.entries
    }) || [];

  return updateArrayObject({
    objectid: gameid,
    propid: 'imageAssets',
    objects: state.entries,
    propValue: [...currentAssets, ...assets]
  });
};

const getArrayObjectPropValue = ({ objects, objectid, propid }) => {
  const target = objects.find((object) => {
    return object.id === objectid;
  });
  if (target) {
    return target[propid];
  }
  return false;
};

const updateArrayObject = ({ objects, objectid, propid, propValue }) => {
  return objects.map((object) => {
    if (object.id === objectid) {
      const newProps = {};
      newProps[propid] = propValue;
      return { ...object, ...newProps };
    }
    return object;
  });
};

// reducer methods
const updateGame = ({ games, gameid, updatedSettings }) => {
  return games.map((game) => {
    if (game.id === gameid) {
      return { ...game, ...updatedSettings };
    }
    return { ...game };
  });
};

export default AppReducer;
