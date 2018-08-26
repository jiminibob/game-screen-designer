import * as GamesActions from 'store/actions/Games.actions';

const initState = {
  entries: []
};

const AppReducer = (state = initState, action) => {
  const nextState = {};

  switch (action.type) {
    case GamesActions.SET_GAMES:
      nextState.entries = action.payload;
      return { ...state, ...nextState };
  }

  return state;
};

export default AppReducer;
