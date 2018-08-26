import { GameModel } from 'store/models/Game.model';

export const GenerateRandomGames = () => {
  const results = [];
  while (results.length < 5) {
    results.push(
      GameModel({
        id: results.length.toString(),
        name: 'Game : ' + (results.length + 1)
      })
    );
  }
  return results;
};
