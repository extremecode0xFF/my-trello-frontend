import React from 'react';
import style from './card.module.scss';
import { ICard } from '../../../../common/interfaces/ICard';

export default function Card({ title }: ICard): React.ReactElement {
  return <li className={style.card}>{title}</li>;
}
