import React, { Component, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //
import { AppState } from '../../store/store';
import { IBoard } from '../../common/interfaces/IBoard';
import Board from './components/Board/Board';
import Modal from '../../components/Modal/Modal';
import CreateBoard from '../../components/Modal/CreateBoard/CreateBoard';
import { getBoards } from '../../store/modules/boards/actions';
import { setModalActive } from '../../store/modules/modal/actions';
import style from './home.module.scss';

type PropsType = {
  boards: IBoard[];
  modal: { active: boolean };
  getBoards: () => Promise<void>;
  setModalActive: (value: boolean) => void;
};

interface MapState {
  boards: IBoard[];
  modal: { active: boolean };
}

class Home extends Component<PropsType> {
  async componentDidMount(): Promise<void> {
    const { getBoards: asyncGetBoards } = this.props;
    await asyncGetBoards();
  }

  onClickAddBoard = (): void => {
    setModalActive(true);
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
    const { modal } = this.props;
    return (
      <div className={style.wrapper}>
        <h2 className={style.title}>Мои Доски</h2>
        <div className={style.borders}>
          <button className={style.button} onClick={this.onClickAddBoard}>
            + Cоздать доску
          </button>
          {this.makeBoards()}
          <Modal active={modal.active} setActive={setModalActive}>
            <CreateBoard />
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): MapState => {
  const { boards } = { ...state.boards };
  return {
    boards,
    modal: state.modal,
  };
};

export default connect(mapStateToProps, { getBoards, setModalActive })(Home);
