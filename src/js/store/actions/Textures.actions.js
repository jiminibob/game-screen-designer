export const ADD_TEXTURE = '[TEXTURES] ADD_TEXTURE';
export const ADD_TEXTURES = '[TEXTURES] ADD_TEXTURES';
export const DELETE_TEXTURE = '[TEXTURES] DELETE_TEXTURE';

export const AddTextures = ({ textureModels }) => ({
  type: ADD_TEXTURES,
  payload: textureModels
});

export const AddTexture = ({ textureModel }) => ({
  type: ADD_TEXTURE,
  payload: textureModel
});

export const DeleteTexture = ({ textureid }) => ({
  type: DELETE_TEXTURE,
  payload: textureid
});
