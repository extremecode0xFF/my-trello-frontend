import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ICard } from '../../../../common/interfaces/ICard';
import { deleteCard, editCard } from '../../../../store/modules/board/actions';
import Editor from '../../../../components/Editor/Editor';
import style from './card.module.scss';

export default function Card(props: ICard): React.ReactElement {
  const [focused, setFocus] = useState(false);
  const [hoverCard, setHoverCard] = useState(false);
  const { id, title } = props;
  const { id: boardID } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const handleClickDelete = (): void => {
    dispatch(deleteCard(boardID, id));
  };

  const toggleButt = (): void => {
    setHoverCard(!hoverCard);
  };

  const toggleButtonHide = (): void => {
    setFocus(!focused);
  };

  return (
    <div className={style.container} onMouseEnter={toggleButt} onMouseLeave={toggleButt}>
      <li className={style.card} onBlur={toggleButtonHide} onFocus={toggleButtonHide}>
        <Editor className={style.title} title={title} entityID={id} action={editCard} />
      </li>
      <button
        className={!hoverCard || focused ? [style.buttonRemove, style.hide].join(' ') : style.buttonRemove}
        onClick={handleClickDelete}
      >
        <span className={`material-icons ${style.icon}`}>delete_forever</span>
      </button>
    </div>
  );
}
