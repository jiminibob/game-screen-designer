export const BOOT_INIT = '[APP] BOOT_INIT';
export const BOOT_COMPLETE = '[APP] BOOT_COMPLETE';
export const VIEW_GAMES = '[APP] VIEW_GAMES';
export const VIEW_GAME = '[APP] VIEW_GAME';
export const VIEW_GAME_SETTINGS = '[APP] VIEW_GAME_SETTINGS';

export const StartBoot = () => ({
  type: BOOT_INIT
});

export const CompleteBoot = () => ({
  type: BOOT_COMPLETE
});

export const ViewGames = () => ({
  type: VIEW_GAMES
});

export const ViewGame = (gameid) => ({
  type: VIEW_GAME,
  payload: gameid
});

export const ViewGameSettings = (gameid) => ({
  type: VIEW_GAME_SETTINGS,
  payload: gameid
});
