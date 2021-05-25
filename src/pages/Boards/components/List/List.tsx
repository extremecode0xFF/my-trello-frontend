import React, { ReactElement } from 'react';
import Card from '../Card/Card';
import style from './list.module.scss';
import { ICards } from '../../../../common/interfaces/ICards';
import { IList } from '../../../../common/interfaces/IList';

function makeCard(cards: ICards): ReactElement[] {
  return Object.keys(cards).map((value) => {
    const card = cards[value];
    return <Card key={card.id.toString()} {...card} />;
  });
}

export default function List({ title, cards }: IList): ReactElement {
  return (
    <div className={style.list}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.cards}>{makeCard(cards)}</ul>
      <button className={style.buttonAddCard}>+ Добавить карточку</button>
    </div>
  );
}
