export const GetGames = ({ state }) => {
  return state.games.entries;
};
export const GetGameById = ({ state, gameid }) => {
  return GetGames({ state }).find((game) => {
    return game.id === gameid;
  });
};
