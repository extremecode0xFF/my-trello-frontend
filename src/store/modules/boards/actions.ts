import instance from '../../../api/request';
import { asyncDispatch } from '../../store';

export const getBoards = async (): Promise<void> => {
  try {
    const boards = await instance.get('/board');
    await asyncDispatch({ type: 'UPDATE_BOARDS', boards });
  } catch (e) {
    asyncDispatch({ type: 'UPDATE_BOARDS_ERROR' });
  }
};
