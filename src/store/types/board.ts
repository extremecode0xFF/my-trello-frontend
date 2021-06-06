import { IBoardFull } from '../../common/interfaces/IBoardFull';

export interface BoardState {
  board: IBoardFull;
  isLoading: boolean;
  error: null | string;
  inputs: { title: string };
}

export const initialBoardState: BoardState = {
  board: { title: '', users: [], lists: {} },
  isLoading: false,
  error: null,
  inputs: { title: '' },
};

export enum BoardActionTypes {
  // UPDATE BOARD
  UPDATE_BOARD = 'UPDATE_BOARD',
  UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS',
  UPDATE_BOARD_ERROR = 'UPDATE_BOARD_ERROR',
  // DELETE
  DELETE_BOARD = 'DELETE_BOARD',
  DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS',
  DELETE_BOARD_ERROR = 'DELETE_BOARD_ERROR',
  // UPDATE BOARD TITLE
  UPDATE_BOARD_TITLE = 'UPDATE_BOARD_TITLE',
  UPDATE_BOARD_TITLE_SUCCESS = 'UPDATE_BOARD_TITLE_SUCCESS',
  UPDATE_BOARD_TITLE_ERROR = 'UPDATE_BOARD_TITLE_ERROR',
  // INPUT CHANGE
  INPUT_CHANGE = 'INPUT_CHANGE',
  // ADD LIST
  ADD_LIST = 'ADD_LIST',
  ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS',
  ADD_LIST_ERROR = 'ADD_LIST_ERROR',
  // DELETE LIST
  DELETE_BOARD_LIST = 'DELETE_BOARD_LIST',
  DELETE_BOARD_LIST_SUCCESS = 'DELETE_BOARD_LIST_SUCCESS',
  DELETE_BOARD_LIST_ERROR = 'DELETE_BOARD_LIST_ERROR',
  // EDIT LIST
  EDIT_BOARD_LIST = 'EDIT_BOARD_LIST',
  EDIT_BOARD_LIST_SUCCESS = 'EDIT_BOARD_LIST_SUCCESS',
  EDIT_BOARD_LIST_ERROR = 'EDIT_BOARD_LIST_ERROR',
  // ADD CARD
  ADD_CARD = 'ADD_CARD',
  ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS',
  ADD_CARD_ERROR = 'ADD_CARD_ERROR',
  // DELETE CARD
  DELETE_BOARD_CARD = 'DELETE_BOARD_CARD',
  DELETE_BOARD_CARD_SUCCESS = 'DELETE_BOARD_CARD_SUCCESS',
  DELETE_BOARD_CARD_ERROR = 'DELETE_BOARD_CARD_ERROR',
  // EDIT CARD
  EDIT_BOARD_CARD = 'EDIT_BOARD_CARD',
  EDIT_BOARD_CARD_SUCCESS = 'EDIT_BOARD_CARD_SUCCESS',
  EDIT_BOARD_CARD_ERROR = 'EDIT_BOARD_CARD_ERROR',
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
  payload: string;
}

interface ActionDeleteBoard {
  type: BoardActionTypes.DELETE_BOARD;
}

interface ActionDeleteBoardSuccess {
  type: BoardActionTypes.DELETE_BOARD_SUCCESS;
  payload: boolean;
}

interface ActionDeleteBoardError {
  type: BoardActionTypes.DELETE_BOARD_ERROR;
  payload: string;
}

interface ActionInputChange {
  type: BoardActionTypes.INPUT_CHANGE;
  payload: string;
}

interface ActionUpdateBoardTitle {
  type: BoardActionTypes.UPDATE_BOARD_TITLE;
}

interface ActionUpdateBoardTitleSuccess {
  type: BoardActionTypes.UPDATE_BOARD_TITLE_SUCCESS;
  payload: string;
}

interface ActionUpdateBoardTitleError {
  type: BoardActionTypes.UPDATE_BOARD_TITLE_ERROR;
  payload: string;
}

interface ActionAddList {
  type: BoardActionTypes.ADD_LIST;
}

interface ActionAddListSuccess {
  type: BoardActionTypes.ADD_LIST_SUCCESS;
}

interface ActionAddListError {
  type: BoardActionTypes.ADD_LIST_ERROR;
  payload: string;
}

interface ActionDeleteList {
  type: BoardActionTypes.DELETE_BOARD_LIST;
}

interface ActionDeleteListSuccess {
  type: BoardActionTypes.DELETE_BOARD_LIST_SUCCESS;
}

interface ActionDeleteListError {
  type: BoardActionTypes.DELETE_BOARD_LIST_ERROR;
  payload: string;
}

interface ActionAddCard {
  type: BoardActionTypes.ADD_CARD;
}

interface ActionAddCardSuccess {
  type: BoardActionTypes.ADD_CARD_SUCCESS;
}

interface ActionAddCardError {
  type: BoardActionTypes.ADD_CARD_ERROR;
  payload: string;
}

interface ActionDeleteCard {
  type: BoardActionTypes.DELETE_BOARD_CARD;
}

interface ActionDeleteCardSuccess {
  type: BoardActionTypes.DELETE_BOARD_CARD_SUCCESS;
}

interface ActionDeleteCardError {
  type: BoardActionTypes.DELETE_BOARD_CARD_ERROR;
  payload: string;
}

interface ActionEditList {
  type: BoardActionTypes.EDIT_BOARD_LIST;
}

interface ActionEditListSuccess {
  type: BoardActionTypes.EDIT_BOARD_LIST_SUCCESS;
}

interface ActionEditListError {
  type: BoardActionTypes.EDIT_BOARD_LIST_ERROR;
  payload: string;
}

interface ActionEditCard {
  type: BoardActionTypes.EDIT_BOARD_CARD;
}

interface ActionEditCardSuccess {
  type: BoardActionTypes.EDIT_BOARD_CARD_SUCCESS;
}

interface ActionEditCardError {
  type: BoardActionTypes.EDIT_BOARD_CARD_ERROR;
  payload: string;
}

export type BoardAction =
  | ActionUpdateBoard
  | ActionUpdateBoardSuccess
  | ActionUpdateBoardError
  | ActionInputChange
  | ActionDeleteBoard
  | ActionDeleteBoardSuccess
  | ActionDeleteBoardError
  | ActionUpdateBoardTitle
  | ActionUpdateBoardTitleSuccess
  | ActionUpdateBoardTitleError
  | ActionAddList
  | ActionAddListSuccess
  | ActionAddListError
  | ActionDeleteList
  | ActionDeleteListSuccess
  | ActionDeleteListError
  | ActionEditList
  | ActionEditListSuccess
  | ActionEditListError
  | ActionAddCard
  | ActionAddCardSuccess
  | ActionAddCardError
  | ActionDeleteCard
  | ActionDeleteCardSuccess
  | ActionDeleteCardError
  | ActionEditCard
  | ActionEditCardSuccess
  | ActionEditCardError;
