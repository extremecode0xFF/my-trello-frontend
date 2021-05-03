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
}

interface ActionInit {
  type: BoardsActionTypes.UPDATE_BOARDS;
}

interface ActionSuccess {
  type: BoardsActionTypes.UPDATE_BOARDS_SUCCESS;
  payload: IBoard[];
}

interface ActionError {
  type: BoardsActionTypes.UPDATE_BOARDS_ERROR;
  payload: string;
}

export type BoardsAction = ActionInit | ActionSuccess | ActionError;
