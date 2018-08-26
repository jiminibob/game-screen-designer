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
    orientation: data.orientation || ORIENTATION_LANDSCAPE,
    hasLevels: data.hasLevels || false,
    levelUnlockCondition: data.levelUnlockCondition || false,
    canSelectLevels: data.canSelectLevels || false,
    canSelectCharacter: data.canSelectCharacter || false,
    screens: data.screens || [
      { id: 'loading', name: 'Loading' },
      { id: 'landing', name: 'Landing' },
      { id: 'instructions', name: 'Instructions' },
      { id: 'gamehud', name: 'Game Hud' },
      { id: 'gameend', name: 'Game End' },
      { id: 'pause', name: 'Pause' },
      { id: 'rotate', name: 'Rotate' }
    ]
  };
};
