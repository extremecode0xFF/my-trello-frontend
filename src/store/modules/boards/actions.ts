import { Dispatch } from 'redux';
import api from '../../../api/request';
import config from '../../../common/constants/api';
import { BoardsActionTypes } from '../../types/boards';
import { setModalActive } from '../modal/action';
// import { asyncDispatch as dispatch } from '../../store';
import { IBoard } from '../../../common/interfaces/IBoard';

export const getBoards = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardsActionTypes.UPDATE_BOARDS });
    const boards = await api.get(config.boards);
    dispatch({ type: BoardsActionTypes.UPDATE_BOARDS_SUCCESS, payload: boards });
  } catch (e) {
    dispatch({ type: BoardsActionTypes.UPDATE_BOARDS_ERROR, payload: e });
  }
};

export const createBoard = (titleName: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    const { data: boards } = await api.post(config.boards, { title: titleName });
    dispatch({ type: 'ADD_BOARDS', boards });
    setModalActive(false);
  } catch (e) {
    dispatch({ type: 'ADD_BOARDS_ERROR' });
  }
};
// todo
export const deleteBoard = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const b: { boards: [] } = await api.get(config.boards);
    b.boards.map(async (board: IBoard) => {
      const { id, title } = board;
      if (!title.search('Test')) {
        const { data: boards } = await api.delete(`${config.boards}/${id}`);
        dispatch({ type: 'DELETE_BOARDS', boards });
      }
      return true;
    });
    //
    // const { data: boards } = await api.delete(`${config.boards}/1620827393815`);
    // dispatch({ type: 'DELETE_BOARDS', boards });
  } catch (e) {
    dispatch({ type: 'DELETE_BOARDS_ERROR' });
  }
};
