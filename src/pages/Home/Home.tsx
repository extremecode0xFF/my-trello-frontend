import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //
import { IBoard } from '../../common/interfaces/IBoard';
import Board from './components/Board/Board';
import style from './home.module.scss';
import { addBoards, getBoards } from '../../store/modules/boards/actions';
import { AppState } from '../../store/store';

interface StateType {
  boards: IBoard[];
}

type PropsType = {
  boards: IBoard[];
  getBoards: () => Promise<void>;
  addBoards: () => Promise<void>;
};

class Home extends React.Component<PropsType, StateType> {
  async componentDidMount(): Promise<void> {
    // eslint-disable-next-line react/destructuring-assignment
    await this.props.getBoards();
  }

  addBoards = async (): Promise<void> => {
    // eslint-disable-next-line react/destructuring-assignment
    await this.props.addBoards();
  };

  makeBoards(): ReactElement[] {
    const { boards } = this.props;
    return boards?.map((board) => (
      <Link to={`/board/${board.id}`} key={board.id}>
        <Board title={board.title} />
      </Link>
    ));
  }

  render(): ReactElement {
    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Мои Доски</h2>
        <div className={style.borders}>
          {this.makeBoards()}
          <button onClick={this.addBoards}>Создать доску+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): IBoard[] => ({ ...state.boards.boards });

export default connect(mapStateToProps, { getBoards, addBoards })(Home);
