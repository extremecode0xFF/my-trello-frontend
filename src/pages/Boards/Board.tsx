import React, { ChangeEvent, Component, FocusEvent, KeyboardEvent, ReactElement } from 'react';
import AutosizeInput from 'react-input-autosize';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addList, deleteBoard, editBoardTitle, getBoard, setBoardTitle } from '../../store/modules/board/actions';
import List from './components/List/List';
import Composer from '../../components/Composer/Composer';
import validator, { pattern } from '../../common/validator/validator';
import { AppState } from '../../store/store';
import { IBoardFull } from '../../common/interfaces/IBoardFull';
import { IDataList } from '../../common/constants/api';
import style from './board.module.scss';

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
  addList: (id: string, data: IDataList) => void;
}

type RouteProps = RouteComponentProps<{ id: string }>;

type PropsType = StateProps & DispatchProps & RouteProps;

class Board extends Component<PropsType> {
  componentDidMount(): void {
    const { getBoard: asyncGetBoard } = this.props;
    asyncGetBoard(this.getBoardID());
  }

  getBoardID = (): string => {
    const { id } = this.props;
    return id;
  };

  handlerFocusIn = (event: FocusEvent<HTMLInputElement>): void => {
    event.target.select();
  };

  handlerFocusOut = (event: FocusEvent<HTMLInputElement>): void => {
    const title = event.target.value.trim();
    const { board } = this.props;
    if (title && title !== board.title) {
      const { setBoardTitle: asyncSetTitle } = this.props;
      asyncSetTitle(this.getBoardID(), title);
    } else {
      editBoardTitle(board.title);
    }
  };

  handlerChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    if (validator(pattern, event.target.value)) {
      editBoardTitle(event.target.value);
    }
  };

  handlerClickEnter = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.currentTarget.blur();
    }
  };

  handlerDeleteBoard = (): void => {
    const { deleteBoard: dispatchDeleteBoard } = this.props;
    dispatchDeleteBoard(this.getBoardID());
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
            onKeyPress={this.handlerClickEnter}
            value={title}
          />
          <a onClick={this.handlerDeleteBoard}>Удалить доску</a>
        </div>
        <div className={style.boardCanvas}>
          <div className={style.lists}>
            <Composer
              className={style.buttonAddList}
              placeholder="Ввести заголовок списка"
              buttonTitle="Добавить список"
              action={addList}
            />
            {this.makeLists()}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: RouteProps): StateProps => ({
  board: { ...state.board.board },
  id: ownProps.match.params.id,
  inputs: { title: state.board.inputs.title },
});

const mapDispatchToProps: DispatchProps = { getBoard, setBoardTitle, editBoardTitle, deleteBoard, addList };

// export default connect(mapStateToProps, { getBoard })(withRouter(Board));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Board));
