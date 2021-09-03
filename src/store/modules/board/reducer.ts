import { BoardAction, BoardActionTypes, BoardState, initialBoardState } from '../../types/board';

export default function reducer(state = initialBoardState, action: BoardAction): BoardState {
  switch (action.type) {
    case BoardActionTypes.UPDATE_BOARD:
      return { ...state, isLoading: true };
    case BoardActionTypes.UPDATE_BOARD_SUCCESS:
      return { ...state, isLoading: false, board: action.payload, boardTitle: action.payload.title };
    case BoardActionTypes.UPDATE_BOARD_ERROR:
      return { ...state, isLoading: false };
    case BoardActionTypes.INPUT_CHANGE:
      return { ...state, boardTitle: action.payload };
    case BoardActionTypes.EDIT_BOARD:
      return { ...state, board: action.payload };
    default: {
      return state;
    }
  }
}
