import { Dispatch } from 'redux';
import config from '../../../common/constants/api';
import api from '../../../api/request';
import { BoardAction, BoardActionTypes } from '../../types/board';
import { asyncDispatch } from '../../store';

export const getBoard = (boardId: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.UPDATE_BOARD });
    const board = await api.get(`${config.boards}/${boardId}`);
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_SUCCESS, payload: board });
  } catch (e) {
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_ERROR, payload: 'Призошла ошибка при получении доски' });
  }
};

export const setBoardTitle = (boardID: string, newTitle: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_TITLE });
    const title = await api.put(`${config.boards}/${boardID}`, { title: newTitle });
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_TITLE_SUCCESS, payload: title });
  } catch (e) {
    dispatch({
      type: BoardActionTypes.UPDATE_BOARD_TITLE_ERROR,
      payload: 'Призошла ошибка при изменении заголовка доски',
    });
  }
};

export const editBoardTitle = (title: string): void => {
  asyncDispatch({ type: BoardActionTypes.INPUT_CHANGE, payload: title });
};

export const deleteBoard = (id: string) => async (dispatch: Dispatch<BoardAction>): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.DELETE_BOARD });
    const boards = await api.delete(`${config.boards}/${id}`);
    dispatch({ type: BoardActionTypes.DELETE_BOARD_SUCCESS, payload: boards.data });
  } catch (e) {
    dispatch({ type: BoardActionTypes.DELETE_BOARD_ERROR, payload: 'Произошла ошибка при удалении доски' });
  }
};

export const addList = (id: string, data: { title: string; position: number }) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    dispatch({ type: 'ADD_LIST' });
    await api.post(`${config.boards}/${id}/list`, data);
    dispatch({ type: 'ADD_LIST_SUCCESS', payload: true });
  } catch (e) {
    dispatch({ type: 'ADD_LIST_ERROR', payload: 'Произошла ошибка при добавлении списка' });
  }
};
