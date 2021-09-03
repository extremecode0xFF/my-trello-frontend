import { ThunkAction } from 'redux-thunk';
import store, { AppState, asyncDispatch as dispatch } from '../../store';
import { DragNDropActionTypes, Entities, Entity } from '../../types/drag';
import { IBoardFull } from '../../../common/interfaces/IBoardFull';
import { BoardAction, BoardActionTypes } from '../../types/board';
import { ICard } from '../../../common/interfaces/ICard';
import { ILists } from '../../../common/interfaces/ILists';
import { IDataCardGroup } from '../../../common/interfaces/IDataCardGroup';
import { editGroupCards } from '../board/actions';

type ThunkType = ThunkAction<Promise<void>, AppState, unknown, BoardAction>;

export const setSlot = (slot: Entity | null): void => {
  if (slot) {
    dispatch({ type: DragNDropActionTypes.DRAG_UPDATE_SLOT, payload: slot });
  } else {
    dispatch({ type: DragNDropActionTypes.DRAG_END });
  }
};

export const setOriginLists = (lists: ILists): void => {
  dispatch({ type: DragNDropActionTypes.DRAG_SET_ORIGIN_LISTS, payload: lists });
};

export const dropCard = (boardID: string, entity?: { originLists: ILists; currentList: ILists }): ThunkType => async (
  asyncDispatch
): Promise<void> => {
  let oldLists: ILists;
  let lists: ILists;
  oldLists = store.getState().drag.originLists || {};
  lists = store.getState().board.board.lists;
  if (entity) {
    oldLists = entity.originLists;
    lists = entity.currentList;
  }

  const cardSet: IDataCardGroup[] = [];
  Object.keys(lists).forEach((listKey) => {
    Object.keys(lists[listKey].cards).forEach((cardKey) => {
      const oldList = oldLists[listKey];
      const newList = lists[listKey];
      if (oldList.cards[cardKey] && oldList.cards[cardKey].position !== newList.cards[cardKey].position) {
        cardSet.push({
          id: lists[listKey].cards[cardKey].id,
          list_id: +listKey,
          position: lists[listKey].cards[cardKey].position,
        });
      } else if (!oldList.cards[cardKey]) {
        cardSet.push({
          id: lists[listKey].cards[cardKey].id,
          list_id: +listKey,
          position: lists[listKey].cards[cardKey].position,
        });
      }
    });
  });
  if (cardSet.length) {
    await asyncDispatch(editGroupCards(boardID, cardSet));
  }
};

export const setSlotLocation = (drag: Entities): void => {
  const copyBoard: IBoardFull = JSON.parse(JSON.stringify(store.getState().board.board));
  const { lists } = copyBoard;
  // list has a cards
  if (drag.target.card) {
    if (drag.target.list.id === drag.source.list.id) {
      const list = lists[drag.source.list.id];
      list.cards[drag.source.card.id].position = drag.target.card.position;
      list.cards[drag.target.card.id].position = drag.source.card.position;
      setSlot({ card: list.cards[drag.source.card.id], list });
    } else {
      // new card with new position.
      const sourceList = lists[drag.source.list.id];
      const targetList = lists[drag.target.list.id];
      const newCard: ICard = {
        ...drag.source.card,
        users: [...drag.source.card.users],
        position: drag.target.card.position,
      };
      // insert card to new list.
      const { cards: targetCards } = targetList;
      let initialPosition = newCard.position;
      Object.keys(targetCards).forEach((id) => {
        const card = targetCards[id];
        if (card.position >= newCard.position) {
          card.position = ++initialPosition;
        }
      });
      targetCards[drag.source.card.id] = newCard;
      // remove card from old list
      const { cards: sourceCards } = sourceList;
      Object.keys(sourceCards).forEach((id) => {
        const card = sourceCards[id];
        if (card.position > sourceCards[drag.source.card.id].position) {
          --card.position;
        }
      });
      delete sourceCards[drag.source.card.id];
      setSlot({ card: targetList.cards[newCard.id], list: targetList });
    }
    // list has not a cards
  } else {
    const newCard: ICard = {
      ...drag.source.card,
      users: [...drag.source.card.users],
      position: 0,
    };
    const { cards } = lists[drag.target.list.id];
    cards[drag.source.card.id] = newCard; // add card in list cards.
    delete lists[drag.source.list.id].cards[drag.source.card.id];
    setSlot({ card: newCard, list: lists[drag.target.list.id] });
  }
  dispatch({ type: BoardActionTypes.EDIT_BOARD, payload: copyBoard });
};
