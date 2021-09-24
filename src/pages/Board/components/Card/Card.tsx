import React, { DragEvent, FC, useState } from 'react';
import { Link, Redirect, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { ICard } from '../../../../common/interfaces/ICard';
import { deleteCard } from '../../../../store/modules/board/actions';
import { IList } from '../../../../common/interfaces/IList';
import { dropCard, setOriginLists, setSlot, setSlotLocation } from '../../../../store/modules/dragndrop/actions';
import style from './card.module.scss';

type PropsParent = {
  parentList: IList;
};

const Card: FC<ICard & PropsParent> = (props) => {
  const { id, position, parentList, title } = props;
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  const { slot } = useTypedSelector((state) => state.drag);
  const { lists } = useTypedSelector((state) => state.board.board);
  const { id: boardID } = useParams<{ id: string }>();
  const { pathname, state } = useLocation<{ modal: boolean }>();
  const hasCard = (): boolean => {
    return new RegExp(`/card/${id}`).test(pathname) && !state;
  };

  const routeState = {
    cardID: id,
    listID: parentList.id,
  };

  const handleClickDelete = (): void => {
    dispatch(deleteCard(boardID, id));
  };

  const toggleHover = (): void => {
    setHover((prevHover) => !prevHover);
  };

  const dragStartHandler = (e: DragEvent<HTMLDivElement>): void => {
    setSlot({ card: props, list: parentList });
    setOriginLists(lists);
    e.currentTarget.classList.add(style.dragStart);
  };

  const dragEndHandler = (e: DragEvent<HTMLDivElement>): void => {
    setSlot(null);
    e.currentTarget.classList.remove(style.dragStart);
  };

  const dragOverHandler = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const offset = e.clientY - rect.top - rect.height / 2;
    if (slot?.card && id !== slot.card.id) {
      if (slot.list.id === parentList.id) {
        if ((slot.card.position > position && offset < 0) || (slot.card.position < position && offset > 0)) {
          setSlotLocation({ source: slot, target: { list: parentList, card: props } });
        }
      } else {
        setSlotLocation({ source: slot, target: { list: parentList, card: props } });
      }
      e.currentTarget.classList.add(style.dragOver);
    }
  };

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>): void => {
    e.currentTarget.classList.remove(style.dragOver);
  };

  const dropHandler = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.currentTarget.classList.remove(style.dragOver);
    dispatch(dropCard(boardID));
    setSlot(null);
  };

  return (
    <div
      className={style.container}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      draggable
      onDragStart={dragStartHandler}
      onDragEnd={dragEndHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
    >
      <li className={slot?.card?.id === id ? [style.card, style.dragStart].join(' ') : style.card}>
        <Link to={{ pathname: `${pathname}/card/${id}`, state: { ...routeState } }}>
          <div className={style.title}>{title}</div>
        </Link>
        {hasCard() ? <Redirect to={{ pathname: `${pathname}`, state: { ...routeState } }} /> : null}
      </li>

      <button
        className={!hover || slot?.card ? [style.buttonRemove, style.hide].join(' ') : style.buttonRemove}
        onClick={handleClickDelete}
      >
        <span className={`material-icons-round ${style.icon}`} title="Удалить карточку">
          delete_forever
        </span>
      </button>
    </div>
  );
};

export default Card;
