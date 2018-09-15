// models
import { GameModel } from 'store/models/Game.model';
import { ScreenModel } from 'store/models/Screen.model';

const MANDATORY_SCREENS = ['LOADING', 'LANDING', 'GAMEPLAY', 'GAMECOMPLETE', 'GAMEPAUSE'];

// methods
export const GenerateRandomGames = () => {
  const games = [];
  const screens = [];
  while (screens.length < 5) {
    const gameScreens = MANDATORY_SCREENS.map((screenType) => {
      const screen = new ScreenModel({ screenType });
      screens.push(screen);
      return screen.id;
    });

    games.push(
      GameModel({
        id: screens.length.toString(),
        name: 'Game : ' + (screens.length + 1),
        screens: gameScreens
      })
    );
  }
  return { games, screens };
};
