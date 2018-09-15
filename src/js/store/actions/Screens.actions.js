export const ADD_SCREEN = '[SCREENS] ADD_SCREEN';
export const ADD_SCREENS = '[SCREENS] ADD_SCREENS';
export const DELETE_SCREEN = '[SCREENS] DELETE_SCREEN';

export const AddScreen = ({ screenModel }) => ({
  type: ADD_SCREEN,
  payload: screenModel
});
export const AddScreens = ({ screenModels }) => ({
  type: ADD_SCREENS,
  payload: screenModels
});

export const DeleteScreen = ({ screenid }) => ({
  type: DELETE_SCREEN,
  payload: screenid
});
