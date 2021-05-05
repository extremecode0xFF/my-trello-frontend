import React from 'react';
import style from './card.module.scss';

export default function Card({ title }: { title: string }): React.ReactElement {
  return <li className={style.card}>{title}</li>;
}
