import React, { ChangeEvent, Component, FocusEvent, KeyboardEvent, ReactElement } from 'react';
import AutosizeInput from 'react-input-autosize';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addList, deleteBoard, editBoardTitle, getBoard, setBoardTitle } from '../../store/modules/board/actions';
import style from './board.module.scss';
import { AppState } from '../../store/store';
import { IBoardFull } from '../../common/interfaces/IBoardFull';
import List from './components/List/List';
import { Composer } from './components/Composer/Composer';

interface IData {
  title: string;
  position: number;
}

interface StateProps {
  board: IBoardFull;
  id: string;
  inputs: { title: string };
}

interface DispatchProps {
  getBoard: (id: string) => void;
  setBoardTitle: (id: string, newTitle: string) => void;
  editBoardTitle: (newTitle: string) => void;
  deleteBoard: (id: string) => void;
  addList: (id: string, data: IData) => void;
}

type Props = RouteComponentProps<{ id: string }>;

type PropsType = StateProps & DispatchProps & Props;

class Board extends Component<PropsType> {
  componentDidMount(): void {
    const { id } = this.props;
    const { getBoard: getAsyncBoard } = this.props;
    getAsyncBoard(id);
  }

  getBoardID = (): string => {
    const { id } = this.props;
    return id;
  };

  setTitle = (title: string): void => {
    const { setBoardTitle: setBoardTitle1 } = this.props;
    setBoardTitle1(this.getBoardID(), title);
  };

  getBoard = (): void => {
    const { getBoard: getBoard1 } = this.props;
    getBoard1(this.getBoardID());
  };

  handlerFocusIn = (event: FocusEvent<HTMLInputElement>): void => {
    event.target.select();
  };

  handlerFocusOut = (event: FocusEvent<HTMLInputElement>): void => {
    this.setTitle(event.target.value);
  };

  handlerChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    editBoardTitle(event.target.value);
  };

  handlerClickEnter = (event: KeyboardEvent<HTMLInputElement>): void => {
    const { value, blur } = event.currentTarget;
    if (event.key === 'Enter') {
      this.setTitle(value);
      blur();
    }
  };

  dBoard = (): void => {
    const { deleteBoard: deleteBoard1 } = this.props;
    deleteBoard1(this.getBoardID());
    // eslint-disable-next-line react/destructuring-assignment
    // this.props.history.push('/');
  };

  addNewList = (data: IData): void => {
    const { addList: asyncAddList, getBoard: asyncGetBoard } = this.props;
    asyncAddList(this.getBoardID(), data);
    asyncGetBoard(this.getBoardID());
  };

  makeLists(): ReactElement[] {
    const { board } = this.props;
    const { lists } = board;
    return Object.keys(lists).map((value) => {
      const list = lists[value];
      return <List key={list.id} {...list} />;
    });
  }

  render(): ReactElement {
    const {
      inputs: { title },
    } = this.props;
    return (
      <>
        <div className={style.header}>
          <Link to="/">Домой</Link>
          <AutosizeInput
            className={style.input}
            inputStyle={{ fontSize: 18 }}
            onFocus={this.handlerFocusIn}
            onBlur={this.handlerFocusOut}
            onChange={this.handlerChangeTitle}
            onKeyUp={this.handlerClickEnter}
            value={title}
          />
          <button onClick={this.dBoard}>Удалить доску</button>
        </div>
        <div className={style.lists}>
          <Composer
            buttonTitle="Добавить список"
            placeholder="Ввести заголовок для этой карточки"
            addList={this.addNewList}
          />
          {this.makeLists()}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: Props): StateProps => ({
  board: { ...state.board.board },
  id: ownProps.match.params.id,
  inputs: { title: state.board.inputs.title },
});

const mapDispatchToProps: DispatchProps = { getBoard, setBoardTitle, editBoardTitle, deleteBoard, addList };

// export default connect(mapStateToProps, { getBoard })(withRouter(Board));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Board));
