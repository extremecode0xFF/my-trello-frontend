import React from 'react';
import { IBoard } from '../../../../common/interfaces/IBoard';
import style from './board.module.scss';

export default function Board({ title }: IBoard): React.ReactElement {
  return <div className={style.board}>{title}</div>;
}
