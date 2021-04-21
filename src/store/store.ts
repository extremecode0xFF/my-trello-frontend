import { createStore } from 'redux';
import rootReducer from './reducer';
import { BoardState } from './modules/board/reducer';
import { BoardsState } from './modules/boards/reducer';
import { UserState } from './modules/user/reducer';

export interface AppState {
  board: BoardState; // эти интерфейсы нужно описать в редьюсерах соответствующих
  boards: BoardsState;
  user: UserState;
}

const initialState: AppState = {
  board: { users: [], lists: [] },
  boards: { boards: [] },
  user: { user: [] },
};

const store = createStore(rootReducer, initialState);

export const asyncDispatch = store.dispatch;
export default store;
