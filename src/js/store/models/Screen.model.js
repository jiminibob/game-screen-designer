// libs
import shortid from 'shortid';

// model
export const ScreenModel = (data = {}) => {
  const id = data.id || shortid.generate();
  return {
    id: id,
    name: data.name || 'screen ' + id,
    screenType: 'LOADING'
  };
};
