export const BOOT_INIT = '[APP] BOOT_INIT';
export const BOOT_COMPLETE = '[APP] BOOT_COMPLETE';
export const VIEW_GAMES = '[APP] VIEW_GAMES';

export const StartBoot = () => ({
  type: BOOT_INIT
});

export const CompleteBoot = () => ({
  type: BOOT_COMPLETE
});

export const ViewGames = () => ({
  type: VIEW_GAMES
});
