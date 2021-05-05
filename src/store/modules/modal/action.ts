import { asyncDispatch as dispatch } from '../../store';
import { ModalActionTypes } from '../../types/modal';

export const showModal = (): void => {
  dispatch({ type: ModalActionTypes.SHOW_MODAL });
};

export const hideModal = (): void => {
  dispatch({ type: ModalActionTypes.HIDE_MODAL });
};
