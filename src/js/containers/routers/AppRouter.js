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
import ModalGameAdd from 'containers/pages/app/ModalGameAdd';

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
    const { location } = this.props;
    const isModal = location.state && location.state.modal;

    if (this.props.bootComplete) {
      return (
        <div className="app-wrapper">
          <Switch>
            <Route exact path={AppUrls.URL_HOME} component={PageHome} />
            <Route exact path={AppUrls.URL_APP_SETTINGS} component={PageSettings} />
            <Route exact path={AppUrls.URL_GAMES} component={PageGames} />
            <Route path={AppUrls.GetUrlGame()} component={GameRouter} />
          </Switch>
          {isModal && this.renderModal(location.state.modal)}
        </div>
      );
    }

    // boot had not finished, app is not ready
    return null;
  }

  renderModal(modal) {
    return (
      <Switch location={{ ...this.props.location, ...{ pathname: modal } }}>
        <Route exact path={AppUrls.MODAL_CREATE_GAME} component={ModalGameAdd} />
      </Switch>
    );
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

const storeActions = {};

export default withRouter(
  connect(
    mapStateToProps,
    storeActions
  )(AppRouter)
);
