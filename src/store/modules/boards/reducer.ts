import { BoardsState, BoardsAction, BoardsActionTypes } from '../../types/boards';

const initialState: BoardsState = {
  boards: [],
  isLoading: false,
  error: null,
};

export default function reducer(state = initialState, action: BoardsAction): BoardsState {
  switch (action.type) {
    case BoardsActionTypes.UPDATE_BOARDS:
      return { isLoading: true, error: null, boards: [] };
    case BoardsActionTypes.UPDATE_BOARDS_SUCCESS:
      return { isLoading: false, error: null, boards: action.payload };
    case BoardsActionTypes.UPDATE_BOARDS_ERROR:
      return { isLoading: false, error: action.payload, boards: [] };
    case BoardsActionTypes.ADD_BOARDS:
      return { ...state, isLoading: true };
    case BoardsActionTypes.ADD_BOARDS_SUCCESS:
      return { ...state, isLoading: false };
    case BoardsActionTypes.ADD_BOARDS_ERROR:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
