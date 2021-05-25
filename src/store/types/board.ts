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
  UPDATE_BOARD = 'UPDATE_BOARD',
  UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS',
  UPDATE_BOARD_ERROR = 'UPDATE_BOARD_ERROR',
  DELETE_BOARD = 'DELETE_BOARD',
  DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS',
  DELETE_BOARD_ERROR = 'DELETE_BOARD_ERROR',
  UPDATE_BOARD_TITLE = 'UPDATE_BOARD_TITLE',
  UPDATE_BOARD_TITLE_SUCCESS = 'UPDATE_BOARD_TITLE_SUCCESS',
  UPDATE_BOARD_TITLE_ERROR = 'UPDATE_BOARD_TITLE_ERROR',
  INPUT_CHANGE = 'INPUT_CHANGE',
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
  payload: IBoardFull;
}

interface ActionDeleteBoardError {
  type: BoardActionTypes.DELETE_BOARD_ERROR;
  payload: string;
}

interface ActionInputChange {
  type: BoardActionTypes.INPUT_CHANGE;
  payload: string;
}

export type BoardAction =
  | ActionUpdateBoard
  | ActionUpdateBoardSuccess
  | ActionUpdateBoardError
  | ActionInputChange
  | ActionDeleteBoard
  | ActionDeleteBoardSuccess
  | ActionDeleteBoardError;
