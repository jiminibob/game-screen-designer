// Get screens, supplid an array of id's to filter certain ones
export const GetScreensAsArray = ({ state, screenids }) => {
  if (screenids) {
    // filter by id
    const screens = screenids.map((screenid) => {
      return GetScreen({ state, screenid });
    });
    return screens;
  } else {
    // if no id's map and return all screens as array
    return Object.keys(state.screens.entries).map((key) => {
      return GetScreen({ state, key });
    });
  }
};

// Return texture as default key/value object
export const GetScreens = ({ state, screenids }) => {
  // if an array of texture id's have been s,upplied, return matching screens
  if (screenids) {
    return screenids.reduce((obj, screenid) => {
      const texture = GetScreen({ state, screenid });
      if (texture) {
        obj.screenid = texture;
      }
      return obj;
    }, {});
  }

  // otherwise return all screens
  return { ...state.screens.entries };
};

export const GetScreen = ({ state, screenid }) => {
  return state.screens.entries[screenid];
};
