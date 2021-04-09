import React, { ReactElement } from 'react';
import Card from '../Card/Card';
import { IList } from '../../../../common/interfaces/IList';
import { ICard } from '../../../../common/interfaces/ICard';
import './list.scss';

function makeCard(cards: ICard[]): ReactElement[] {
  return cards.map((card) => <Card key={card.id.toString()} title={card.title} />);
}

export default function List({ title, cards }: IList): ReactElement {
  return (
    <div className="list">
      <h2 className="list-title">{title}</h2>
      <ul className="list-cards">{makeCard(cards)}</ul>
      <button className="list-button-add">Добавить карточку</button>
    </div>
  );
}
