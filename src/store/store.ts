import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { BoardState } from './modules/board/reducer';
import { BoardsState } from './types/boards';
import { UserState } from './modules/user/reducer';
import { ModalState } from './types/modal';

export interface AppState {
  board: BoardState;
  boards: BoardsState;
  user: UserState;
  modal: ModalState;
}

const initialState: AppState = {
  board: { users: [], lists: [] },
  boards: { boards: [], isLoading: false, error: null },
  user: { user: [] },
  modal: { active: false },
};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export const asyncDispatch = store.dispatch;
export default store;
