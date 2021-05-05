export interface ModalState {
  active: boolean;
}

export enum ModalActionTypes {
  SHOW_MODAL = 'SHOW_MODAL',
  HIDE_MODAL = 'HIDE_MODAL',
}

interface ActionStart {
  type: ModalActionTypes.SHOW_MODAL;
}

interface ActionStop {
  type: ModalActionTypes.HIDE_MODAL;
}

export type ModalAction = ActionStart | ActionStop;
