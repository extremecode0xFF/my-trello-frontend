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
      return { ...state, isLoading: false, board: action.payload };
    case BoardActionTypes.DELETE_BOARD_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case BoardActionTypes.INPUT_CHANGE:
      return { ...state, inputs: { title: action.payload } };
    default: {
      return state;
    }
  }
}
