// actions
import * as AppActions from 'store/actions/App.actions';

// default state
const initState = {
  bootComplete: false
};

// reducer
const AppReducer = (state = initState, action) => {
  const nextState = {};

  switch (action.type) {
    case AppActions.BOOT_COMPLETE:
      nextState.bootComplete = true;
      return { ...state, ...nextState };
  }

  return state;
};

export default AppReducer;
