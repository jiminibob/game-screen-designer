// Get textures, supplid an array of id's to filter certain ones
export const GetTexturesAsArray = ({ state, textureids }) => {
  if (textureids) {
    // filter by id
    return textureids.map((textureid) => {
      return GetTexture({ state, textureid });
    });
  } else {
    // if no id's map and return all textures as array
    return Object.keys(state.textures.entries).map((key) => {
      return GetTexture({ state, key });
    });
  }
};

// Return texture as default key/value object
export const GetTextures = ({ state, textureids }) => {
  // if an array of texture id's have been s,upplied, return matching textures
  if (textureids) {
    return textureids.reduce((obj, textureid) => {
      const texture = GetTexture({ state, textureid });
      if (texture) {
        obj.textureid = texture;
      }
      return obj;
    }, {});
  }

  // otherwise return all textures
  return { ...state.textures.entries };
};

export const GetTexture = ({ state, textureid }) => {
  return { ...state.textures[textureid] };
};
