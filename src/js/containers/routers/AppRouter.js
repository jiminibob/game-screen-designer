// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// constants
import * as AppUrls from 'constants/AppUrls';

import GameRouter from './GameRouter';

// contaienrs
import PageHome from 'containers/pages/PageHome';
import PageAppSettings from 'containers/pages/PageAppSettings';
import PageGames from 'containers/pages/PageGames';

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class AppRouter extends Component {
  constructor() {
    super();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return (
      <div className="app-wrapper">
        <Switch>
          <Route exact path={AppUrls.URL_HOME} component={PageHome} />
          <Route exact path={AppUrls.URL_APP_SETTINGS} component={PageAppSettings} />
          <Route exact path={AppUrls.URL_GAMES} component={PageGames} />
          <Route path={AppUrls.GetUrlGame()} component={GameRouter} />
        </Switch>
      </div>
    );
  }
}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);