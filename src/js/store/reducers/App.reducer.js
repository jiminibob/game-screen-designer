import * as AppActions from 'store/actions/App.actions';

const initState = {
  bootComplete: false
};

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
