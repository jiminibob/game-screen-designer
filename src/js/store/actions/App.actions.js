// constants
export const BOOT_INIT = '[APP] BOOT_INIT';
export const BOOT_COMPLETE = '[APP] BOOT_COMPLETE';

// actions
export const StartBoot = () => ({
  type: BOOT_INIT
});

export const CompleteBoot = () => ({
  type: BOOT_COMPLETE
});
