import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IList } from '../../../../common/interfaces/IList';
import { addCard, deleteList, editList } from '../../../../store/modules/board/actions';
import Card from '../Card/Card';
import Composer from '../../../../components/Composer/Composer';
import Editor from '../../../../components/Editor/Editor';
import { setSlotLocation } from '../../../../store/modules/dragndrop/actions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import style from './list.module.scss';

export default function List(props: IList): ReactElement {
  const { title, cards, id, position } = props;
  const dispatch = useDispatch();
  const { id: boardID } = useParams<{ id: string }>();
  const { slot } = useTypedSelector((state) => state.drag);

  const handleClickDeleteList = (): void => {
    dispatch(deleteList(boardID, id));
  };

  const makeCard = (): ReactElement[] => {
    return Object.keys(cards)
      .sort((a, b) => cards[a].position - cards[b].position)
      .map((value) => {
        const card = cards[value];
        return <Card key={card.id.toString()} {...card} parentList={props} />;
      });
  };

  const handlerDragOver = (): void => {
    if (!Object.keys(cards).length && slot) {
      setSlotLocation({ source: slot, target: { list: props, card: null } });
    }
  };

  const editTitleHandler = (text: string): void => {
    dispatch(editList(boardID, id, { position, title: text }));
  };

  const addCardHandler = (titleText: string): void => {
    const totalCards = cards ? Object.keys(cards).length : 0;
    dispatch(addCard(boardID, { title: titleText, list_id: id, position: totalCards }));
  };

  return (
    <div onDragOver={handlerDragOver} className={style.list}>
      <div className={style.header}>
        <Editor className={style.title} title={title} action={editTitleHandler} />
        <button className={style.buttonRemoveList} onClick={handleClickDeleteList}>
          <span className={`material-icons ${style.icon}`}>delete_forever</span>
        </button>
      </div>
      <ul className={style.cards}>{makeCard()}</ul>
      <Composer
        className={style.buttonAddCard}
        placeholder="Ввести заголовок для этой карточки"
        buttonTitle="Добавить карточку"
        action={addCardHandler}
      />
    </div>
  );
}
