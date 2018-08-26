// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// constants
import * as AppUrls from 'constants/AppUrls';

// contaienrs
import PageGame from 'containers/pages/PageGame';
import PageGameAssets from 'containers/pages/PageGameAssets';
import PageGameAsset from 'containers/pages/PageGameAsset';
import PageGameScreens from 'containers/pages/PageGameScreens';
import PageGameScreen from 'containers/pages/PageGameScreen';

/*
================================================================================
    base app class use to define to main layout
================================================================================
*/

class GameRouter extends Component {
  constructor() {
    super();
  }

  /*
    ================================================================================
       rendering
    ================================================================================
    */

  render() {
    /*
    =====================================================
      No valid game selected - redirect to game select page
    =====================================================
    */

    if (!this.props.gameid) {
      return (
        <Redirect
          to={{
            pathname: AppUrls.URL_GAMES,
            state: { from: this.props.location }
          }}
        />
      );
    }

    /*
    =====================================================
      If we get this far then selected game is valid
    =====================================================
    */

    return (
      <Switch>
        <Route exact path={AppUrls.GetUrlGame()} component={PageGame} />
        <Route exact path={AppUrls.GetUrlGameAssets()} component={PageGameAssets} />
        <Route exact path={AppUrls.GetUrlGameAsset()} component={PageGameAsset} />
        <Route exact path={AppUrls.GetUrlGameScreens()} component={PageGameScreens} />
        <Route exact path={AppUrls.GetUrlGameScreen()} component={PageGameScreen} />
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
    gameid: props.match.params[AppUrls.URL_PROP_GAMEID]
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameRouter);