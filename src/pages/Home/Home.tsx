import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //
import { IBoard } from '../../common/interfaces/IBoard';
import Board from './components/Board/Board';
import style from './home.module.scss';
import { getBoards } from '../../store/modules/boards/actions';

interface StateType {
  boards: IBoard[];
}

type PropsType = {
  boards: IBoard[];
  getBoards: () => Promise<void>;
};

class Home extends React.Component<PropsType, StateType> {
  async componentDidMount(): Promise<void> {
    // eslint-disable-next-line react/destructuring-assignment
    await this.props.getBoards();
  }

  makeBoards(): ReactElement[] {
    const { boards } = this.props;
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

const mapStateToProps = (state: StateType): IBoard[] => ({ ...state.boards });

export default connect(mapStateToProps, { getBoards })(Home);
