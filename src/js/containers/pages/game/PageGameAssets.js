// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// constants
import { URL_PROP_GAMEID } from 'constants/AppUrls';

// actions
import { ViewCreateImageAsset, ViewTextureAsset } from 'store/actions/Nav.actions';

// selectors
import { GetGameTextures } from 'store/selectors/Games.selectors';

// commponents
import GameTexturesList from 'components/GameTexturesList';

/*
================================================================================
  class
================================================================================
*/

class PageGameAssets extends Component {
  constructor() {
    super();
    this.bindedHandleSelectTextureAsset = this.handleSelectTextureAsset.bind(this);
    this.bindedHandleUploadAssets = this.handleUploadAssets.bind(this);
  }

  handleSelectTextureAsset(textureid) {
    console.log(textureid);
    this.props.ViewTextureAsset({ textureid });
  }

  handleUploadAssets() {
    this.props.ViewCreateImageAsset();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    console.log(this.props.gameTextures);
    return (
      <div className="app-screen game-assets">
        <p>PageGameAssets</p>
        <button onClick={this.bindedHandleUploadAssets}>ADD TEXTURES</button>
        <GameTexturesList
          textures={this.props.gameTextures}
          onSelectTexture={this.bindedHandleSelectTextureAsset}
        />
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

  return {
    gameid,
    gameTextures: GetGameTextures({ state, gameid })
  };
}
const StoreActions = {
  ViewCreateImageAsset,
  ViewTextureAsset
};

export default connect(
  mapStateToProps,
  StoreActions
)(PageGameAssets);
