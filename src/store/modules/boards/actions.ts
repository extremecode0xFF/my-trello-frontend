import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import api from '../../../api/request';
import config from '../../../common/constants/api';
import { BoardsAction, BoardsActionTypes } from '../../types/boards';
import { setModalActive } from '../modal/actions';
import { AppState } from '../../store';
import { IBoard } from '../../../common/interfaces/IBoard';

type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, BoardsAction>;

export const getBoards = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardsActionTypes.UPDATE_BOARDS });
    const { boards }: { boards: IBoard[] } = await api.get(config.boards);
    dispatch({ type: BoardsActionTypes.UPDATE_BOARDS_SUCCESS, payload: boards });
  } catch (e) {
    dispatch({ type: BoardsActionTypes.UPDATE_BOARDS_ERROR, payload: 'Призошла ошибка при получении списка досок' });
  }
};

export const createBoard = (titleName: string): ThunkActionType => async (dispatch): Promise<void> => {
  try {
    dispatch({ type: BoardsActionTypes.ADD_BOARDS });
    await api.post(config.boards, { title: titleName });
    dispatch({ type: BoardsActionTypes.ADD_BOARDS_SUCCESS });
    setModalActive(false);
    await dispatch(getBoards());
  } catch (e) {
    dispatch({ type: BoardsActionTypes.ADD_BOARDS_ERROR, payload: 'Призошла ошибка при добавлении новой доски' });
  }
};
