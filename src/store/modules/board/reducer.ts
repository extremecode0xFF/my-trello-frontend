import { BoardAction, BoardActionTypes, BoardState, initialBoardState } from '../../types/board';

export default function reducer(state = initialBoardState, action: BoardAction): BoardState {
  switch (action.type) {
    case BoardActionTypes.UPDATE_BOARD:
      return { ...state, isLoading: true };
    case BoardActionTypes.UPDATE_BOARD_SUCCESS:
      return { ...state, isLoading: false, board: action.payload, inputs: { title: action.payload.title } };
    case BoardActionTypes.UPDATE_BOARD_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case BoardActionTypes.DELETE_BOARD:
      return { ...state, isLoading: true };
    case BoardActionTypes.DELETE_BOARD_SUCCESS:
      return { ...state, isLoading: false };
    case BoardActionTypes.DELETE_BOARD_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case BoardActionTypes.INPUT_CHANGE:
      return { ...state, inputs: { title: action.payload } };
    case BoardActionTypes.UPDATE_BOARD_TITLE:
      return { ...state, isLoading: true };
    case BoardActionTypes.UPDATE_BOARD_TITLE_SUCCESS:
      return { ...state, isLoading: false, board: { ...state.board, title: action.payload } };
    case BoardActionTypes.UPDATE_BOARD_TITLE_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case BoardActionTypes.ADD_LIST:
      return { ...state, isLoading: true };
    case BoardActionTypes.ADD_LIST_SUCCESS:
      return { ...state, isLoading: false };
    case BoardActionTypes.ADD_LIST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case BoardActionTypes.DELETE_BOARD_LIST:
      return { ...state, isLoading: true };
    case BoardActionTypes.DELETE_BOARD_LIST_SUCCESS:
      return { ...state, isLoading: false };
    case BoardActionTypes.DELETE_BOARD_LIST_ERROR:
      return { ...state, isLoading: false };
    default: {
      return state;
    }
  }
}
