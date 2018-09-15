// libs
import shortid from 'shortid';

// model
export const TextureModel = (data = {}) => {
  const id = data.id || shortid.generate();
  return {
    id: id,
    name: data.name || 'texture ' + id,
    src: data.src,
    addToGallery: false
  };
};
