import { combineReducers } from 'redux';
import boardReducer from './modules/board/reducer';
import boardsReducer from './modules/boards/reducer';
import userReducer from './modules/user/reducer';
import modalReducer from './modules/modal/reducer';
import dragNdropReducer from './modules/dragndrop/reducer';

export const rootReducer = combineReducers({
  board: boardReducer,
  boards: boardsReducer,
  user: userReducer,
  modal: modalReducer,
  drag: dragNdropReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
