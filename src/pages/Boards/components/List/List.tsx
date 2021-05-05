import React, { ReactElement } from 'react';
import Card from '../Card/Card';
import { IList } from '../../../../common/interfaces/IList';
import { ICard } from '../../../../common/interfaces/ICard';
import style from './list.module.scss';

function makeCard(cards: ICard[]): ReactElement[] {
  return cards.map((card) => <Card key={card.id.toString()} title={card.title} />);
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
