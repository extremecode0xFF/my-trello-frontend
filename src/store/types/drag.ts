import { ICard } from '../../common/interfaces/ICard';
import { IList } from '../../common/interfaces/IList';
import { ILists } from '../../common/interfaces/ILists';

export interface DragNDropState {
  slot: Entity | null;
  originLists: ILists | null;
}

export interface EntityDefault {
  list: IList;
  card: ICard | null;
}

export interface Entity extends EntityDefault {
  card: NonNullable<EntityDefault['card']>;
}

export interface Entities {
  source: Entity;
  target: EntityDefault;
}

export const initialState: DragNDropState = { slot: null, originLists: null };

export enum DragNDropActionTypes {
  DRAG_UPDATE_SLOT = 'DRAG_UPDATE_SLOT',
  DRAG_SET_ORIGIN_LISTS = 'DRAG_SET_ORIGIN_LISTS',
  DRAG_END = 'DRAG_END',
}

interface ActionDragUpdateSlot {
  type: DragNDropActionTypes.DRAG_UPDATE_SLOT;
  payload: Entity | null;
}

interface ActionDragSetOriginLists {
  type: DragNDropActionTypes.DRAG_SET_ORIGIN_LISTS;
  payload: ILists;
}

interface ActionDragEnd {
  type: DragNDropActionTypes.DRAG_END;
}

export type DragNDropAction = ActionDragUpdateSlot | ActionDragSetOriginLists | ActionDragEnd;
