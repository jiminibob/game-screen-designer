// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

//constants
import { ORIENTATION_LANDSCAPE } from 'constants/AppConstants';
import { URL_PROP_SCREENID, URL_PROP_GAMEID } from 'constants/AppUrls';

// selectors
import { GetScreen } from 'store/selectors/Screens.selectors';
import { GetGameById } from 'store/selectors/Games.selectors';
import { GetGameImageAssets } from 'store/selectors/Games.selectors';

/*
================================================================================
  class
================================================================================
*/

class PageGameScreen extends Component {
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
      <div className="app-screen">
        <p>{'PageGameScreen : ' + this.props.screen.name}</p>
        <canvas
          className="game-canvas"
          width={this.props.game.orientation === ORIENTATION_LANDSCAPE ? 1280 : 720}
          height={this.props.game.orientation === ORIENTATION_LANDSCAPE ? 720 : 1280}
        />
        {this.renderImageAssets(this.props.imageAssets)}
      </div>
    );
  }

  renderImageAssets(assets) {
    return assets.map((asset, index) => {
      return (
        <div key={index}>
          <img key={index} src={asset.src} width={150} />
          <p>{asset.name}</p>
        </div>
      );
    });
  }
}

/*
================================================================================
    hook up to redux
================================================================================
*/

function mapStateToProps(state, props) {
  // grab game id from url prop
  const gameid = props.match.params[URL_PROP_GAMEID];
  const screenid = props.match.params[URL_PROP_SCREENID];
  return {
    game: GetGameById({ state, gameid }),
    screen: GetScreen({ state, screenid }),
    imageAssets: GetGameImageAssets({ state, gameid })
  };
}

const storeActions = {};

export default connect(
  mapStateToProps,
  storeActions
)(PageGameScreen);
