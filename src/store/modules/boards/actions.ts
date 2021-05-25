import { Dispatch } from 'redux';
import api from '../../../api/request';
import config from '../../../common/constants/api';
import { BoardsActionTypes } from '../../types/boards';
import { setModalActive } from '../modal/action';

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
