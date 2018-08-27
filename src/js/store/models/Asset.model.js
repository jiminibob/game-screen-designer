// libs
import shortid from 'shortid';

// model
export const ImageAssetModel = (data = {}) => {
  const id = data.id || shortid.generate();
  return {
    id: id,
    name: data.name || 'asset ' + id,
    src: data.src
  };
};
