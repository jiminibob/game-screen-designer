import * as ScreensActions from 'store/actions/Screens.actions';
import * as Utils from 'store/reducers/utils.reducer';

// default state
const initState = {
  entries: {}
};

// reducer
const ScreensReducer = (state = initState, action) => {
  const nextState = {};

  switch (action.type) {
    case ScreensActions.ADD_SCREEN:
      nextState.entries = Utils.AddEntry({ entries: state.entries, newEntry: action.payload });
      return { ...state, ...nextState };
    case ScreensActions.ADD_SCREENS:
      nextState.entries = Utils.AddEntries({ entries: state.entries, newEntries: action.payload });
      return { ...state, ...nextState };
  }

  return state;
};

export default ScreensReducer;
