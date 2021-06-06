import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import api from '../../../api/request';
import config, { IDataCard, IDataList } from '../../../common/constants/api';
import { BoardAction, BoardActionTypes } from '../../types/board';
import { AppState, asyncDispatch } from '../../store';
import history from '../../../common/history/history';

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, BoardAction>;

export const getBoard = (boardId: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.UPDATE_BOARD });
    const board = await api.get(`${config.boards}/${boardId}`);
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_SUCCESS, payload: board });
  } catch (e) {
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_ERROR, payload: 'Призошла ошибка при получении доски' });
  }
};

export const setBoardTitle = (boardID: string, newTitle: string): ThunkType => async (dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_TITLE });
    await api.put(`${config.boards}/${boardID}`, { title: newTitle });
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_TITLE_SUCCESS, payload: newTitle });
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

export const deleteBoard = (boardID: string) => async (dispatch: Dispatch<BoardAction>): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.DELETE_BOARD });
    await api.delete(`${config.boards}/${boardID}`);
    dispatch({ type: BoardActionTypes.DELETE_BOARD_SUCCESS, payload: true });
    history.back();
  } catch (e) {
    dispatch({ type: BoardActionTypes.DELETE_BOARD_ERROR, payload: 'Произошла ошибка при удалении доски' });
  }
};

export const addList = (boardID: string, data: IDataList): ThunkType => async (dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.ADD_LIST });
    const dataWithDefaultPos = data.position ? data : { ...data, position: 1 };
    await api.post(`${config.boards}/${boardID + config.list}`, dataWithDefaultPos);
    dispatch({ type: BoardActionTypes.ADD_LIST_SUCCESS });
    await dispatch(getBoard(boardID));
  } catch (e) {
    dispatch({ type: BoardActionTypes.ADD_LIST_ERROR, payload: 'Произошла ошибка при добавлении списка' });
  }
};

export const deleteList = (boardID: string, listID: number): ThunkType => async (dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.DELETE_BOARD_LIST });
    await api.delete(`${config.boards}/${boardID + config.list}/${listID}`);
    dispatch({ type: BoardActionTypes.DELETE_BOARD_LIST_SUCCESS });
    await dispatch(getBoard(boardID));
  } catch (e) {
    dispatch({ type: BoardActionTypes.DELETE_BOARD_LIST_ERROR, payload: 'Произошла ошибка при удалении списка' });
  }
};

export const editList = (boardID: string, listID: number, data: IDataList): ThunkType => async (
  dispatch
): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.EDIT_BOARD_LIST });
    // const dataFinal = data.position ? data : { ...data, position: 1 };
    await api.put(`${config.boards}/${boardID + config.list}/${listID}`, data);
    dispatch({ type: BoardActionTypes.EDIT_BOARD_LIST_SUCCESS });
    await dispatch(getBoard(boardID));
  } catch (e) {
    dispatch({
      type: BoardActionTypes.EDIT_BOARD_LIST_ERROR,
      payload: 'Произошла ошибка при изменении заголовка списка',
    });
  }
};

export const addCard = (boardID: string, data: IDataCard): ThunkType => async (dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.ADD_CARD });
    await api.post(`${config.boards}/${boardID + config.card}`, data);
    dispatch({ type: BoardActionTypes.ADD_CARD_SUCCESS });
    await dispatch(getBoard(boardID));
  } catch (e) {
    dispatch({ type: BoardActionTypes.ADD_CARD_ERROR, payload: 'Произошла ошибка при добавлении карточки' });
  }
};

export const deleteCard = (boardID: string, cardID: number): ThunkType => async (dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.DELETE_BOARD_CARD });
    await api.delete(`${config.boards}/${boardID + config.card}/${cardID}`);
    dispatch({ type: BoardActionTypes.DELETE_BOARD_CARD_SUCCESS });
    await dispatch(getBoard(boardID));
  } catch (e) {
    dispatch({ type: BoardActionTypes.DELETE_BOARD_CARD_ERROR, payload: 'Произошла ошибка при добавлении карточки' });
  }
};

export const editCard = (boardID: string, cardID: number, data: IDataCard): ThunkType => async (
  dispatch
): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.EDIT_BOARD_CARD });
    await api.put(`${config.boards}/${boardID + config.card}/${cardID}`, data);
    dispatch({ type: BoardActionTypes.EDIT_BOARD_CARD_SUCCESS });
    await dispatch(getBoard(boardID));
  } catch (e) {
    dispatch({
      type: BoardActionTypes.EDIT_BOARD_CARD_ERROR,
      payload: 'Произошла ошибка при изменении заголовка карточки',
    });
  }
};

export type ActionsTypeAdd = typeof addList | typeof addCard;
export type ActionsTypeEdit = typeof editList | typeof editCard;
