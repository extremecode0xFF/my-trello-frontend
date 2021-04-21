import React, { Component, ReactElement } from 'react';
// import { withRouter } from 'react-router-dom';
import { IList } from '../../common/interfaces/IList';
import List from './components/List/List';
import './board.scss';

interface BoardState {
  title: string;
  lists: IList[];
}

export default class Board extends Component<Record<string, never>, BoardState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      title: 'Моя тестовая доска',
      lists: [
        {
          id: 1,
          title: 'Планы',
          cards: [
            { id: 1, title: 'помыть кота' },
            { id: 2, title: 'приготовить суп' },
            { id: 3, title: 'сходить в магазин' },
          ],
        },
        {
          id: 2,
          title: 'В процессе',
          cards: [{ id: 4, title: 'посмотреть сериал' }],
        },
        {
          id: 3,
          title: 'Сделано',
          cards: [
            { id: 5, title: 'сделать домашку' },
            { id: 6, title: 'погулять с собакой' },
          ],
        },
      ],
    };
  }

  makeLists(): ReactElement[] {
    const { lists } = this.state;
    return lists.map((list) => <List key={list.id} {...list} />);
  }

  render(): ReactElement {
    const { title } = this.state;
    // const {
    //   match: { params },
    // } = this.props;
    return (
      <>
        <div className="board-header">
          <a className="board-button_home">Домой</a>
          <p className="board-title">{title}</p>
        </div>
        <div className="lists">
          {this.makeLists()}
          <button className="lists-button">Добавить Список</button>
        </div>
      </>
    );
  }
}

// export default withRouter(Board);
