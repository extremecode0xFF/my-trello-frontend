import React, { Component, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //
import { AppState } from '../../store/store';
import { IBoard } from '../../common/interfaces/IBoard';
import Board from './components/Board/Board';
import Modal from './components/Modal/Modal';
import { getBoards } from '../../store/modules/boards/actions';
import { setModalActive } from '../../store/modules/modal/action';
import style from './home.module.scss';
import Content from './components/Modal/Content/Content';

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

  onClickAddBoard = async (): Promise<void> => {
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
            {modal.active ? <Content /> : null}
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): MapState => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { boards } = { ...state.boards.boards };
  return {
    boards,
    modal: state.modal,
  };
};

export default connect(mapStateToProps, { getBoards, setModalActive })(Home);
