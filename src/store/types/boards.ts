import { IBoard } from '../../common/interfaces/IBoard';

export interface BoardsState {
  boards: [] | IBoard[];
  isLoading: boolean;
  error: null | string;
}

export enum BoardsActionTypes {
  UPDATE_BOARDS = 'UPDATE_BOARDS',
  UPDATE_BOARDS_SUCCESS = 'UPDATE_BOARDS_SUCCESS',
  UPDATE_BOARDS_ERROR = 'UPDATE_BOARDS_ERROR',
  ADD_BOARDS = 'ADD_BOARDS',
  ADD_BOARDS_SUCCESS = 'ADD_BOARDS_SUCCESS',
  ADD_BOARDS_ERROR = 'ADD_BOARDS_ERROR',
}

interface ActionUpdateBoards {
  type: BoardsActionTypes.UPDATE_BOARDS;
}

interface ActionUpdateBoardsSuccess {
  type: BoardsActionTypes.UPDATE_BOARDS_SUCCESS;
  payload: IBoard[];
}

interface ActionUpdateBoardsError {
  type: BoardsActionTypes.UPDATE_BOARDS_ERROR;
  payload: string;
}

interface ActionAddBoards {
  type: BoardsActionTypes.ADD_BOARDS;
}

interface ActionAddBoardsSuccess {
  type: BoardsActionTypes.ADD_BOARDS_SUCCESS;
}

interface ActionAddBoardsError {
  type: BoardsActionTypes.ADD_BOARDS_ERROR;
  payload: string;
}

export type BoardsAction =
  | ActionUpdateBoards
  | ActionUpdateBoardsSuccess
  | ActionUpdateBoardsError
  | ActionAddBoards
  | ActionAddBoardsSuccess
  | ActionAddBoardsError;
