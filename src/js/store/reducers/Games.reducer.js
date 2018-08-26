import * as GamesActions from 'store/actions/Games.actions';

// BSAE STATE
const initState = {
  entries: []
};

// REDUCER
const AppReducer = (state = initState, action) => {
  const nextState = {};

  switch (action.type) {
    case GamesActions.SET_GAMES:
      nextState.entries = action.payload;
      return { ...state, ...nextState };
    case GamesActions.UPDATE_GAME_SETTINGS:
      nextState.entries = updateGame({ games: state.entries, ...action.payload });
      return { ...state, ...nextState };
  }

  return state;
};

// INTERNAL METHODS
const updateGame = ({ games, gameid, updatedSettings }) => {
  return games.map((game) => {
    if (game.id === gameid) {
      return { ...game, ...updatedSettings };
    }
    return { ...game };
  });
};

export default AppReducer;
