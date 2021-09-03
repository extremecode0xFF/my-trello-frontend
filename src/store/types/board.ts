import { IBoardFull } from '../../common/interfaces/IBoardFull';

export interface BoardState {
  board: IBoardFull;
  isLoading: boolean;
  boardTitle: string;
}

export const initialBoardState: BoardState = {
  board: { title: '', users: [], lists: {} },
  isLoading: false,
  boardTitle: '',
};

export enum BoardActionTypes {
  UPDATE_BOARD = 'UPDATE_BOARD',
  UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS',
  UPDATE_BOARD_ERROR = 'UPDATE_BOARD_ERROR',

  EDIT_BOARD = 'EDIT_BOARD',
  DELETE_BOARD = 'DELETE_BOARD',
  UPDATE_BOARD_TITLE = 'UPDATE_BOARD_TITLE',
  INPUT_CHANGE = 'INPUT_CHANGE',
  ADD_LIST = 'ADD_LIST',
  DELETE_BOARD_LIST = 'DELETE_BOARD_LIST',
  EDIT_BOARD_LIST = 'EDIT_BOARD_LIST',
  ADD_CARD = 'ADD_CARD',
  DELETE_BOARD_CARD = 'DELETE_BOARD_CARD',
  EDIT_BOARD_CARD = 'EDIT_BOARD_CARD',
  EDIT_BOARD_CARD_GROUP = 'EDIT_BOARD_CARD_GROUP',
}

interface ActionUpdateBoard {
  type: BoardActionTypes.UPDATE_BOARD;
}

interface ActionUpdateBoardSuccess {
  type: BoardActionTypes.UPDATE_BOARD_SUCCESS;
  payload: IBoardFull;
}

interface ActionUpdateBoardError {
  type: BoardActionTypes.UPDATE_BOARD_ERROR;
}

interface ActionEditBoard {
  type: BoardActionTypes.EDIT_BOARD;
  payload: IBoardFull;
}

interface ActionDeleteBoard {
  type: BoardActionTypes.DELETE_BOARD;
}

interface ActionInputChange {
  type: BoardActionTypes.INPUT_CHANGE;
  payload: string;
}

interface ActionUpdateBoardTitle {
  type: BoardActionTypes.UPDATE_BOARD_TITLE;
}

interface ActionAddList {
  type: BoardActionTypes.ADD_LIST;
}

interface ActionDeleteList {
  type: BoardActionTypes.DELETE_BOARD_LIST;
}

interface ActionAddCard {
  type: BoardActionTypes.ADD_CARD;
}

interface ActionDeleteCard {
  type: BoardActionTypes.DELETE_BOARD_CARD;
}

interface ActionEditList {
  type: BoardActionTypes.EDIT_BOARD_LIST;
}

interface ActionEditCard {
  type: BoardActionTypes.EDIT_BOARD_CARD;
}

interface ActionEditCardGroup {
  type: BoardActionTypes.EDIT_BOARD_CARD_GROUP;
}

export type BoardAction =
  | ActionUpdateBoard
  | ActionUpdateBoardSuccess
  | ActionUpdateBoardError
  | ActionEditBoard
  | ActionInputChange
  | ActionDeleteBoard
  | ActionUpdateBoardTitle
  | ActionAddList
  | ActionDeleteList
  | ActionEditList
  | ActionAddCard
  | ActionDeleteCard
  | ActionEditCard
  | ActionEditCardGroup;
