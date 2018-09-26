// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// constants
import * as AppUrls from 'constants/AppUrls';

// selectors
import { GetGameById } from 'store/selectors/Games.selectors';

// contaienrs
import PageGame from 'containers/pages/game/PageGame';
import PageGameAssets from 'containers/pages/game/PageGameAssets';
import PageGameAsset from 'containers/pages/game/PageGameAsset';
import PageGameScreens from 'containers/pages/game/PageGameScreens';
import PageGameScreen from 'containers/pages/game/PageGameScreen';
import PageGameSettings from 'containers/pages/game/PageGameSettings';
import PageGameNotFound from 'containers/pages/game/PageGameNotFound';
import ModalAddImageAsset from 'containers/pages/game/ModalAddImageAsset';
import ModalTextureAsset from 'containers/pages/game/ModalTextureAsset';

/*
================================================================================
  class
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
      No valid game selected - redirect to game not found page
    =====================================================
    */

    if (!this.props.valid) {
      return <PageGameNotFound />;
    }

    /*
    =====================================================
      If we get this far then selected game is valid
    =====================================================
    */

    const { location } = this.props;
    const isModal = location.state && location.state.modal;

    return (
      <span>
        <Switch>
          <Route exact path={AppUrls.GetUrlGame()} component={PageGame} />
          <Route exact path={AppUrls.GetUrlGameAssets()} component={PageGameAssets} />
          <Route exact path={AppUrls.GetUrlGameAsset()} component={PageGameAsset} />
          <Route exact path={AppUrls.GetUrlGameScreens()} component={PageGameScreens} />
          <Route exact path={AppUrls.GetUrlGameScreen()} component={PageGameScreen} />
          <Route exact path={AppUrls.GetUrlGameSettings()} component={PageGameSettings} />
        </Switch>
        {isModal && this.renderModal(location.state.modal)}
      </span>
    );
  }

  renderModal(modal) {
    console.log(modal);
    switch (modal) {
      case AppUrls.MODAL_CREATE_IMAGE_ASSET:
        return <Route component={ModalAddImageAsset} />;
      case AppUrls.MODAL_TEXTURE_ASSET:
        console.log('ModalTextureAsset');
        return <Route component={ModalTextureAsset} />;
    }

    return null;
  }
}

/*
================================================================================
  hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  // grab gameid from url props
  const gameid = props.match.params[AppUrls.URL_PROP_GAMEID];
  // search for game
  const game = GetGameById({ state, gameid });
  // route is valid if game is found
  return {
    valid: game != undefined
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameRouter);
