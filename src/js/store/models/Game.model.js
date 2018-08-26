import shortid from 'shortid';
import { ORIENTATION_LANDSCAPE } from 'constants/AppConstants';

export const GameModel = (data = {}) => {
  const id = data.id || shortid.generate();
  return {
    id: id,
    name: data.name || 'Game : ' + id,
    orientation: data.orientation || ORIENTATION_LANDSCAPE,
    hasLevels: data.hasLevels || false,
    levelUnlockCondition: data.levelUnlockCondition || false,
    canSelectLevels: data.canSelectLevels || false,
    canSelectCharacter: data.canSelectCharacter || false
  };
};
