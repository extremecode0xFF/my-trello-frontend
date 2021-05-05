import React, { Component, ReactElement } from 'react';
import { withRouter, Link, RouteComponentProps } from 'react-router-dom';

import style from './board.module.scss';
import { IList } from '../../common/interfaces/IList';
import List from './components/List/List';

interface BoardState {
  title: string;
  lists: IList[];
}

interface MatchParams {
  id: string;
}

class Board extends Component<RouteComponentProps<MatchParams>, BoardState> {
  constructor(props: RouteComponentProps<MatchParams>) {
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
    // // eslint-disable-next-line no-console
    // console.log(params);
    return (
      <>
        <div className={style.header}>
          <Link to="/">Домой</Link>
          <p>{title}</p>
        </div>
        <div className={style.lists}>
          {this.makeLists()}
          <button className={style.buttonAddList}> + Добавить список</button>
        </div>
      </>
    );
  }
}

export default withRouter(Board);
