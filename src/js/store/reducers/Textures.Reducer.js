import * as TexturesActions from 'store/actions/Textures.actions';
import * as Utils from 'store/reducers/utils.reducer';

// default state
const initState = {
  entries: {}
};

// reducer
const TexturesReducer = (state = initState, action) => {
  const nextState = {};

  switch (action.type) {
    case TexturesActions.ADD_TEXTURE:
      nextState.entries = Utils.AddEntry({ entries: state.entries, newEntry: action.payload });
      return { ...state, ...nextState };
    case TexturesActions.ADD_TEXTURES:
      nextState.entries = Utils.AddEntries({ entries: state.entries, newEntries: action.payload });
      return { ...state, ...nextState };
  }

  return state;
};

export default TexturesReducer;
