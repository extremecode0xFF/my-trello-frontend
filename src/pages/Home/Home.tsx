import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { IBoard } from '../../common/interfaces/IBoard';
import Board from './components/Board/Board';
import style from './home.module.scss';

interface IBoards {
  boards: IBoard[];
}

type Props = Record<string, never>;

export default class Home extends React.Component<Props, IBoards> {
  constructor(props: Props) {
    super(props);
    this.state = {
      boards: [
        { id: 1, title: 'покупки' },
        { id: 2, title: 'подготовка к свадьбе' },
        { id: 3, title: 'разработка интернет-магазина' },
        { id: 4, title: 'курс по продвижению в соцсетях' },
        { id: 5, title: 'ревью' },
      ],
    };
  }

  makeBoards(): ReactElement[] {
    const { boards } = this.state;
    return boards.map((board) => (
      <Link key={board.id} to={`/board/${board.id}`}>
        <Board {...board} />
      </Link>
    ));
  }

  render(): ReactElement {
    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Мои Доски</h2>
        <div className={style.borders}>
          {this.makeBoards()}
          <button>Создать доску+</button>
        </div>
      </div>
    );
  }
}
