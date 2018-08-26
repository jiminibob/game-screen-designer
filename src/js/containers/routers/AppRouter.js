// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

// constants
import * as AppUrls from 'constants/AppUrls';

// selectors
import { GetBootstrapComplete } from 'store/selectors/App.selectors';

// sub routers
import GameRouter from './GameRouter';

// containers
import PageHome from 'containers/pages/app/PageHome';
import PageSettings from 'containers/pages/app/PageSettings';
import PageGames from 'containers/pages/app/PageGames';

/*
================================================================================
  class
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
    if (this.props.bootComplete) {
      return (
        <div className="app-wrapper">
          <Switch>
            <Route exact path={AppUrls.URL_HOME} component={PageHome} />
            <Route exact path={AppUrls.URL_APP_SETTINGS} component={PageSettings} />
            <Route exact path={AppUrls.URL_GAMES} component={PageGames} />
            <Route path={AppUrls.GetUrlGame()} component={GameRouter} />
          </Switch>
        </div>
      );
    }

    // boot had not finished, app is not ready
    return null;
  }
}

/*
================================================================================
  hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  return {
    bootComplete: GetBootstrapComplete({ state })
  };
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
