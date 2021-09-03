import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import api from '../../../api/request';
import config from '../../../common/constants/api';
import { BoardAction, BoardActionTypes } from '../../types/board';
import { AppState, asyncDispatch as storeDispatch } from '../../store';
import history from '../../../common/history/history';
import { showErrorNotification } from '../../../common/notifications/notifications';
import { IDataList } from '../../../common/interfaces/IDataList';
import { IDataCard } from '../../../common/interfaces/IDataCard';
import { IDataCardGroup } from '../../../common/interfaces/IDataCardGroup';

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, BoardAction>;

export const getBoard = (boardId: string) => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardActionTypes.UPDATE_BOARD });
    const board = await api.get(`${config.boards}/${boardId}`);
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_SUCCESS, payload: board });
  } catch (e) {
    showErrorNotification('Failed to get board data');
  }
};

export const setBoardTitle = (boardID: string, newTitle: string): ThunkType => async (dispatch): Promise<void> => {
  try {
    await api.put(`${config.boards}/${boardID}`, { title: newTitle });
    dispatch({ type: BoardActionTypes.UPDATE_BOARD_TITLE });
  } catch (e) {
    showErrorNotification('Failed to change the board title');
  }
};

export const editBoardTitle = (title: string): void => {
  storeDispatch({ type: BoardActionTypes.INPUT_CHANGE, payload: title });
};

export const deleteBoard = (boardID: string) => async (dispatch: Dispatch<BoardAction>): Promise<void> => {
  try {
    await api.delete(`${config.boards}/${boardID}`);
    dispatch({ type: BoardActionTypes.DELETE_BOARD });
    history.push('/');
  } catch (e) {
    showErrorNotification('Failed to delete current board');
  }
};

export const addList = (boardID: string, data: IDataList): ThunkType => async (dispatch): Promise<void> => {
  try {
    await api.post(`${config.boards}/${boardID + config.list}`, data);
    dispatch({ type: BoardActionTypes.ADD_LIST });
    await dispatch(getBoard(boardID));
  } catch (e) {
    showErrorNotification('Failed to add list on current board');
  }
};

export const deleteList = (boardID: string, listID: number): ThunkType => async (dispatch): Promise<void> => {
  try {
    await api.delete(`${config.boards}/${boardID + config.list}/${listID}`);
    dispatch({ type: BoardActionTypes.DELETE_BOARD_LIST });
    await dispatch(getBoard(boardID));
  } catch (e) {
    showErrorNotification('Failed to remove the specified list from the board');
  }
};

export const editList = (boardID: string, listID: number, data: IDataList): ThunkType => async (
  dispatch
): Promise<void> => {
  try {
    await api.put(`${config.boards}/${boardID + config.list}/${listID}`, data);
    dispatch({ type: BoardActionTypes.EDIT_BOARD_LIST });
    await dispatch(getBoard(boardID));
  } catch (e) {
    showErrorNotification('Failed to change the title of current list');
  }
};

export const addCard = (boardID: string, data: IDataCard, reloadBoard?: boolean): ThunkType => async (
  dispatch
): Promise<void> => {
  try {
    await api.post(`${config.boards}/${boardID + config.card}`, data);
    dispatch({ type: BoardActionTypes.ADD_CARD });
    if (reloadBoard || reloadBoard === undefined) await dispatch(getBoard(boardID));
  } catch (e) {
    showErrorNotification('Failed to add card on current list');
  }
};

export const deleteCard = (boardID: string, cardID: number): ThunkType => async (dispatch): Promise<void> => {
  try {
    await api.delete(`${config.boards}/${boardID + config.card}/${cardID}`);
    dispatch({ type: BoardActionTypes.DELETE_BOARD_CARD });
    await dispatch(getBoard(boardID));
  } catch (e) {
    showErrorNotification('Failed to delete card on current list');
  }
};

export const editCard = (boardID: string, cardID: number, data: IDataCard, reloadBoard?: boolean): ThunkType => async (
  dispatch
): Promise<void> => {
  try {
    await api.put(`${config.boards}/${boardID + config.card}/${cardID}`, data);
    dispatch({ type: BoardActionTypes.EDIT_BOARD_CARD });
    if (reloadBoard || reloadBoard === undefined) await dispatch(getBoard(boardID));
  } catch (e) {
    showErrorNotification('Failed to change field of current card');
  }
};

export const editGroupCards = (boardID: string, data: IDataCardGroup[]): ThunkType => async (
  dispatch
): Promise<void> => {
  try {
    await api.put(`${config.boards}/${boardID + config.card}`, data);
    dispatch({ type: BoardActionTypes.EDIT_BOARD_CARD_GROUP });
    await dispatch(getBoard(boardID));
  } catch (e) {
    await dispatch(getBoard(boardID));
    showErrorNotification('Failed to edit group cards');
  }
};
