// actions
import * as AppActions from 'store/actions/App.actions';
import * as GamesActions from 'store/actions/Games.actions';

// INTERNAL METHODS

// start app boot, loads and sets releavant data needed to run
const startBoot = ({ dispatch }) => {
  // let i = 5;
  // while (i--) {
  //   dispatch(GamesActions.CreateNewGame());
  // }
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
