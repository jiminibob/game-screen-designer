// selectors
import { GetScreensAsArray, GetScreen } from 'store/selectors/Screens.selectors';

export const GetGames = ({ state }) => {
  return Object.keys(state.games.entries).map((key) => {
    return GetGameById({ state, gameid: key });
  });
};

export const GetGamesAsArray = ({ state }) => {
  return Object.keys(state.games.entries).map((key) => {
    return GetGames({ state, key });
  });
};

export const GetGameById = ({ state, gameid }) => {
  return state.games.entries[gameid];
};

export const GetGameScreens = ({ state, gameid }) => {
  return GetScreensAsArray({ state, screenids: GetGameById({ state, gameid }).screens });
};

export const GetGameImageAssets = ({ state, gameid }) => {
  return GetGameById({ state, gameid }).imageAssets.map((assetid) => {
    return state.games.imageAssets[assetid];
  });
};
