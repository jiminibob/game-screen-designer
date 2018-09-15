// libs
import shortid from 'shortid';

// constants
import { ORIENTATION_LANDSCAPE } from 'constants/AppConstants';

// model
export const GameModel = (data = {}) => {
  const id = data.id || shortid.generate();
  return {
    id: id,
    name: data.name || 'Game : ' + id,
    textures: data.textures || [],
    orientation: data.orientation || ORIENTATION_LANDSCAPE,
    hasLevels: data.hasLevels || false,
    levelUnlockCondition: data.levelUnlockCondition || false,
    canSelectLevels: data.canSelectLevels || false,
    canSelectCharacter: data.canSelectCharacter || false,
    screens: data.screens || [],
    imageAssets: [],
    buttonAssets: [],
    textAssets: []
  };
};
