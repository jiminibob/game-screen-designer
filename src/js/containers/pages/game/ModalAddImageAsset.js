// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// constants
import { ACCEPTED_IMAGE_TYPES } from 'constants/AppConstants';
import { URL_PROP_GAMEID } from 'constants/AppUrls';

// actions
import { UploadImageAssets } from 'store/actions/Games.actions';
import { CloseOpenModal } from 'store/actions/Nav.actions';

// selectors
import { GetGameById, GetGameTextures } from 'store/selectors/Games.selectors';

// components
import Dropzone from 'react-dropzone';

/*
================================================================================
  class
================================================================================
*/

class ModalAddImageAsset extends Component {
  constructor() {
    super();

    this.state = {};
    this.bindedHandleUploadTexture = this.handleUploadTexture.bind(this);
  }

  /*
  ================================================================================
    USER INPUT
  ================================================================================
  */

  handleUploadTexture(files) {
    this.props.UploadImageAssets({ files, gameid: this.props.gameid });
    this.props.CloseOpenModal();
  }

  handleClose() {
    this.props.CloseOpenModal();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    console.log(this.props.textures);
    return (
      <div className="app-screen modal">
        <div className="modal-content">
          <p>ADD IMAGE ASSET</p>
          <input type="text" placeholder="asset name" />
          <Dropzone
            className="asset-dropzone"
            accept={ACCEPTED_IMAGE_TYPES}
            onDropAccepted={this.bindedHandleUploadTexture}
          >
            <p>drag assets here to upload or click to select files</p>
          </Dropzone>
          <div className="upload-gallery">{this.renderTextures(this.props.textures)}</div>
        </div>
      </div>
    );
  }

  renderTextureOptions(textures) {
    const options = textures.map((texture, index) => {
      return (
        <option key={index}>
          <img src={texture.src} width={100} />
        </option>
      );
    });
    // options.push(
    //   <option key="dropzone">
    //     <Dropzone
    //       className="asset-dropzone"
    //       accept={ACCEPTED_IMAGE_TYPES}
    //       onDropAccepted={this.bindedHandleUploadTexture}
    //     >
    //       <p>drag assets here to upload or click to select files</p>
    //     </Dropzone>
    //   </option>
    // );
    return <select>{options}</select>;
  }

  renderTextures(textures) {
    return textures.map((texture, index) => {
      return (
        <div key={index} className="asset">
          <img src={texture.src} />
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
  const gameid = props.match.params[URL_PROP_GAMEID];
  return {
    gameid,
    game: GetGameById({ state, gameid }),
    textures: GetGameTextures({ state, gameid })
  };
}

const StoreActions = { UploadImageAssets, CloseOpenModal };

export default connect(
  mapStateToProps,
  StoreActions
)(ModalAddImageAsset);
