// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// constants
import { URL_PROP_GAMEID } from 'constants/AppUrls';
import { ACCEPTED_IMAGE_TYPES } from 'constants/AppConstants';

// actions
import { UploadImageAssets } from 'store/actions/Games.actions';

// selectors
import { GetGameImageAssets } from 'store/selectors/Games.selectors';

// components
import Dropzone from 'react-dropzone';

/*
================================================================================
  class
================================================================================
*/

class PageGameAssets extends Component {
  constructor() {
    super();
    this.bindedHandleUploadAssets = this.handleUploadAssets.bind(this);
  }

  handleUploadAssets(files) {
    this.props.UploadImageAssets({ files, gameid: this.props.gameid });
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return (
      <div className="app-screen">
        <p>PageGameAssets</p>
        <Dropzone accept={ACCEPTED_IMAGE_TYPES} onDropAccepted={this.bindedHandleUploadAssets} />
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

  return {
    gameid,
    imageAssets: GetGameImageAssets({ state, gameid })
  };
}
const StoreActions = {
  UploadImageAssets
};

export default connect(
  mapStateToProps,
  StoreActions
)(PageGameAssets);
