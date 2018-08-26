// grab libs
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Route } from "react-router-dom";

// middleware libs
import { connectRouter, routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import invariant from "redux-immutable-state-invariant";

// routing
import { createHashHistory } from "history";
import { ConnectedRouter } from "react-router-redux";

// grab main reducer
import rootReducer from "store/RootReducer";

// grab some miFddleware
import RootMiddleware from "store/RootMiddleware";

// main entry
import AppRouter from "containers/routers/AppRouter";

export default () => {
  // set up history and routing
  const history = createHashHistory({});
  const routesMiddleware = routerMiddleware(history);

  // collate middleware
  const appMiddleware = [routesMiddleware, ...RootMiddleware, invariant()];

  // create main app store reducer
  const storeReducer = connectRouter(history)(rootReducer);

  // setup enhancers
  const composeEnhancers = composeWithDevTools({ latency: 500 });
  const storeEnhancer = composeEnhancers(applyMiddleware(...appMiddleware));

  // create store
  const store = createStore(storeReducer, {}, storeEnhancer);

  // render app entry
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={AppRouter} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("app")
  );
};
