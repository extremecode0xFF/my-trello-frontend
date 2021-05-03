import { Dispatch } from 'redux';
import api from '../../../api/request';
import config from '../../../common/constants/api';
import { BoardsActionTypes } from '../../types/boards';

export const getBoards = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardsActionTypes.UPDATE_BOARDS });
    const boards = await api.get(config.boards); // todo: dont use destructor { data: boards }
    dispatch({ type: BoardsActionTypes.UPDATE_BOARDS_SUCCESS, payload: boards });
  } catch (e) {
    dispatch({ type: BoardsActionTypes.UPDATE_BOARDS_ERROR });
  }
};

export const addBoards = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const { data: boards } = await api.post(config.boards, { title: 'todos' });
    dispatch({ type: 'ADD_BOARDS', boards });
  } catch (e) {
    dispatch({ type: 'ADD_BOARDS_ERROR' });
  }
};
