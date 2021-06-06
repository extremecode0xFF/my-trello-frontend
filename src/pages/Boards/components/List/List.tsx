import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import { ICards } from '../../../../common/interfaces/ICards';
import { IList } from '../../../../common/interfaces/IList';
import { addCard, deleteList, editList } from '../../../../store/modules/board/actions';
import Composer from '../../../../components/Composer/Composer';
import Editor from '../../../../components/Editor/Editor';
import style from './list.module.scss';

function makeCard(cards: ICards): ReactElement[] {
  return Object.keys(cards).map((value) => {
    const card = cards[value];
    return <Card key={card.id.toString()} {...card} />;
  });
}

export default function List(props: IList): ReactElement {
  const { title, cards, id } = props;
  const dispatch = useDispatch();
  const { id: boardID } = useParams<{ id: string }>();
  const handleClickDeleteList = (): void => {
    dispatch(deleteList(boardID, id));
  };
  return (
    <div className={style.list}>
      <div className={style.header}>
        <Editor className={style.title} title={title} entityID={id} action={editList} />
        <button className={style.buttonRemoveList} onClick={handleClickDeleteList}>
          <span className={`material-icons ${style.icon}`}>delete_forever</span>
        </button>
      </div>
      <ul className={style.cards}>{makeCard(cards)}</ul>
      <Composer
        className={style.buttonAddCard}
        placeholder="Ввести заголовок для этой карточки"
        buttonTitle="Добавить карточку"
        action={addCard}
        listID={id}
      />
    </div>
  );
}
