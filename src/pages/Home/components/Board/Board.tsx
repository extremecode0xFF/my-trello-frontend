import React from 'react';
import style from './board.module.scss';

export default function Board({ title }: { title: string }): React.ReactElement {
  return <div className={style.board}>{title}</div>;
}
