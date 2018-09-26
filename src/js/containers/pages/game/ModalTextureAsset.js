// import magical things
import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { CloseOpenModal } from 'store/actions/Nav.actions';

//selectors
import { GetTexture } from 'store/selectors/Games.selectors';

/*
================================================================================
  class
================================================================================
*/

class ModalTextureAsset extends Component {
  constructor() {
    super();

    this.bindedHandleDeleteTexture = this.handleDeleteTexture.bind(this);
  }

  /*
  ================================================================================
    USER INPUT
  ================================================================================
  */

  handleDeleteTexture() {
    console.log('DELETE TEXTURE');
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
    return (
      <div className="app-screen modal modal-texture-asset">
        <div className="modal-content">
          <div className="img-wrap">
            <img src={this.props.texture.src} />
          </div>
          <button onClick={this.bindedHandleDeleteTexture}>delete texture</button>
        </div>
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
  return {
    texture: GetTexture({ state, textureid: props.location.state.textureid })
  };
}

const StoreActions = { CloseOpenModal };

export default connect(
  mapStateToProps,
  StoreActions
)(ModalTextureAsset);
