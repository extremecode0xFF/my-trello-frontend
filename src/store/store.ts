import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { UserState } from './modules/user/reducer';
import { ModalState } from './types/modal';
import { BoardState, initialBoardState } from './types/board';
import { BoardsState } from './types/boards';
import { DragNDropState, initialState as initialDragNDropState } from './types/drag';

export interface AppState {
  board: BoardState;
  boards: BoardsState;
  user: UserState;
  modal: ModalState;
  drag: DragNDropState;
}

const initialState: AppState = {
  board: initialBoardState,
  boards: { boards: [], isLoading: false, error: null },
  user: { user: [] },
  modal: { active: false },
  drag: initialDragNDropState,
};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export const asyncDispatch = store.dispatch;
export default store;
