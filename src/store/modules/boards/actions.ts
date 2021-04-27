import instance from '../../../api/request';
import { asyncDispatch } from '../../store';

export const getBoards = async (): Promise<void> => {
  try {
    await instance.get('/board');
    await asyncDispatch({ type: 'UPDATE_BOARDS' });
  } catch (e) {
    asyncDispatch({ type: 'UPDATE_BOARDS_ERROR' });
  }
};
