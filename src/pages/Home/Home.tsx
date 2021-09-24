import React, { Component, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { AppState } from '../../store/store';
import { IBoard } from '../../common/interfaces/IBoard';
import Board from './components/Board/Board';
import Modal from '../../components/Modal/Modal';
import CreateBoard from '../../components/Modal/CreateBoard/CreateBoard';
import { getBoards } from '../../store/modules/boards/actions';
import { setModalActive } from '../../store/modules/modal/actions';
import style from './home.module.scss';

type MapDispatch = {
  getBoards: () => void;
  setModalActive: (value: boolean) => void;
};

type MapState = {
  boards: IBoard[];
  modal: { active: boolean };
  isLoading: boolean;
};

type Props = MapState & MapDispatch;

class Home extends Component<Props> {
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
    const { modal, isLoading } = this.props;
    if (isLoading) {
      return (
        <div className={style.loaderWrap}>
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
        </div>
      );
    }
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
  const { boards, isLoading } = { ...state.boards };
  return {
    boards,
    isLoading,
    modal: state.modal,
  };
};

const mapDispatchToProps: MapDispatch = { getBoards, setModalActive };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
