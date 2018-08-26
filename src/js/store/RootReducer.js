// library stuff
import { combineReducers } from "redux";

// grab app reducers

import { routerReducer } from "react-router-redux";

// mash them together
const rootReducer = combineReducers({
  route: routerReducer
});

// export
export default rootReducer;
