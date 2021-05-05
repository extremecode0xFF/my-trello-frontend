import { ModalAction, ModalActionTypes, ModalState } from '../../types/modal';

const initialState: ModalState = {
  active: false,
};

export default function reducer(state = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case ModalActionTypes.SHOW_MODAL:
      return { active: true };
    case ModalActionTypes.HIDE_MODAL:
      return { active: false };
    default:
      return state;
  }
}
