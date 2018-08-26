// actions
import * as AppActions from 'store/actions/App.actions';

// INTERNAL METHODS
const startBoot = ({ dispatch }) => {
  dispatch(AppActions.CompleteBoot());
};

// MIDDLEWARE SWITCHES
const AppMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  switch (action.type) {
    case AppActions.BOOT_INIT:
      startBoot({ dispatch });
      break;
  }
};

export default [AppMiddleware];
