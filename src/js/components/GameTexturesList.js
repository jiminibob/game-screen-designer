// import magical things
import React, { Component } from 'react';

/*
================================================================================
  class
================================================================================
*/

class GameTexturesList extends Component {
  constructor() {
    super();
  }

  /*
  ================================================================================
    rendering
  ================================================================================
  */

  render() {
    return <div className="game-textures-list">{this.renderTextures(this.props.textures)}</div>;
  }

  renderTextures(textures) {
    return textures.map((texture, index) => {
      return (
        <div key={index} className="texture-wrap">
          <div className="texture-img">
            <img src={texture.src} />
          </div>
          <p className="texture-label">{texture.name}</p>
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

GameTexturesList.defaultprops = {
  textures: []
};

export default GameTexturesList;
