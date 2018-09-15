// selectors
import { GetScreensAsArray } from 'store/selectors/Screens.selectors';

export const GetGames = ({ state }) => {
  return state.games.entries;
};

export const GetGameById = ({ state, gameid }) => {
  return state.games.entries[gameid];
};

export const GetGameScreens = ({ state, gameid }) => {
  return GetScreensAsArray({ state, screens: GetGameById({ state, gameid }).screens });
};

export const GetGameScreen = ({ state, gameid, screenid }) => {
  return GetGameById({ state, gameid }).screens.find((screen) => {
    return screen.id === screenid;
  });
};

export const GetGameImageAssets = ({ state, gameid }) => {
  return GetGameById({ state, gameid }).imageAssets;
};
