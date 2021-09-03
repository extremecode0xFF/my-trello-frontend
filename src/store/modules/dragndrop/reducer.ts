import { DragNDropAction, DragNDropActionTypes, DragNDropState, initialState } from '../../types/drag';

export default function reducer(state = initialState, action: DragNDropAction): DragNDropState {
  switch (action.type) {
    case DragNDropActionTypes.DRAG_UPDATE_SLOT:
      return { ...state, slot: action.payload };
    case DragNDropActionTypes.DRAG_SET_ORIGIN_LISTS:
      return { ...state, originLists: action.payload };
    case DragNDropActionTypes.DRAG_END:
      return { ...state, slot: null, originLists: null };
    default:
      return state;
  }
}
