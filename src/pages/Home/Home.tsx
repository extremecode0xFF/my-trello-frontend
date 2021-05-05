import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //
import { IBoard } from '../../common/interfaces/IBoard';
import Board from './components/Board/Board';
import { addBoards, getBoards } from '../../store/modules/boards/actions';
import { showModal, hideModal } from '../../store/modules/modal/action';
import { AppState } from '../../store/store';
import style from './home.module.scss';

interface StateType {
  boards: IBoard[];
}

type PropsType = {
  boards: IBoard[];
  getBoards: () => Promise<void>;
  addBoards: () => Promise<void>;
  modal: { active: boolean };
};

class Home extends React.Component<PropsType, StateType> {
  async componentDidMount(): Promise<void> {
    const { getBoards: asyncGetBoards } = this.props;
    // eslint-disable-next-line no-console,react/destructuring-assignment
    console.log(this.props.modal);
    await asyncGetBoards();
  }

  addBoards = async (): Promise<void> => {
    // eslint-disable-next-line react/destructuring-assignment
    // await this.props.addBoards();
    showModal();
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
          <button className={style.button} onClick={this.addBoards}>
            + Cоздать доску
          </button>
          {this.makeBoards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): IBoard[] => ({ ...state.boards.boards });

export default connect(mapStateToProps, { getBoards, addBoards, showModal, hideModal })(Home);
