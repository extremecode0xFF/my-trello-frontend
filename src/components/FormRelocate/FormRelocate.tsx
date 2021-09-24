import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { addCard, editGroupCards } from '../../store/modules/board/actions';
import api from '../../api/request';
import config from '../../common/constants/api';
import { IBoard } from '../../common/interfaces/IBoard';
import { ICard } from '../../common/interfaces/ICard';
import { IBoardFull } from '../../common/interfaces/IBoardFull';
import { ILists } from '../../common/interfaces/ILists';
import { ICards } from '../../common/interfaces/ICards';
import { IList } from '../../common/interfaces/IList';
import { IDataCardGroup } from '../../common/interfaces/IDataCardGroup';
import style from './formRelocate.module.scss';

type Props = {
  className?: string;
  entity: { boardID: number; card: ICard; list: IList };
  closeModal: () => void;
  closeRelocate: () => void;
  editTitle: boolean;
  formTitle: string;
  buttonTitle: string;
};

type FormData = {
  board: number;
  list?: number;
  position?: number;
  title: string;
};

const optionBoards = (boards: IBoard[]): React.ReactElement[] => {
  return boards.map((board) => {
    return (
      <option key={board.id} value={board.id}>
        {board.title}
      </option>
    );
  });
};

const optionLists = (lists: ILists): React.ReactElement[] => {
  return Object.values(lists).map((list) => {
    return (
      <option key={list.id} value={list.id}>
        {list.title}
      </option>
    );
  });
};

const optionCards = (cards: ICards, isSameList: boolean): React.ReactElement[] | React.ReactElement => {
  if (Object.keys(cards).length === 0) {
    return <option value={0}>1</option>;
  }
  const lastOne = (): React.ReactElement | [] => {
    if (isSameList) return [];
    const indexPos = Object.keys(cards).length;
    return (
      <option key={Date.now()} value={indexPos}>
        {indexPos + 1}
      </option>
    );
  };
  return Object.values(cards)
    .sort((a, b) => a.position - b.position)
    .map((card, index) => {
      return (
        <option key={card.id} value={card.position}>
          {index + 1}
        </option>
      );
    })
    .concat(lastOne());
};

const sortCardsByPosition = (board: IBoardFull): void => {
  Object.values(board.lists).forEach((list) => {
    Object.values(list.cards).sort((a, b) => a.position - b.position);
  });
};

const getFirstListAndCardValues = (
  board: IBoardFull,
  currentListID?: number
): [number | undefined, number | undefined] => {
  let listID = currentListID;
  let cardPos;
  if (Object.keys(board.lists).length > 0) {
    if (!listID) listID = +Object.keys(board.lists)[0];
    if (Object.keys(board.lists[listID].cards).length > 0) {
      const card = Object.values(board.lists[listID].cards)[0];
      cardPos = card.position;
    }
  }
  return [listID, cardPos];
};

const createGroup = (fromList: IList, toList: IList, card: ICard, position: number): IDataCardGroup[] => {
  const group: IDataCardGroup[] = [];
  // SAME LIST
  if (fromList.id === toList.id) {
    const target = Object.values(fromList.cards).find((value) => value.position === +position) as ICard;
    group.push(
      { list_id: fromList.id, id: target.id, position: card.position },
      { list_id: fromList.id, id: card.id, position }
    );
    // ANOTHER LIST
  } else {
    group.push({ list_id: toList.id, id: card.id, position });
    Object.values(fromList.cards).forEach((c) => {
      if (card.id !== c.id && c.position >= card.position) {
        group.push({ position: c.position - 1, list_id: fromList.id, id: c.id });
      }
    });
    Object.values(toList.cards).forEach((c) => {
      if (c.position >= position) {
        group.push({ position: c.position + 1, list_id: toList.id, id: c.id });
      }
    });
  }
  return group;
};

const FormRelocate: FC<Props> = ({ formTitle, buttonTitle, entity, closeRelocate, editTitle }) => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'onChange' });
  const [boards, setBoards] = useState<IBoard[]>([] as IBoard[]);
  const [currentBoard, setCurrentBoard] = useState<IBoardFull>({} as IBoardFull);
  const [currentListID, setCurrentListID] = useState<number | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const loadBoards = async (): Promise<void> => {
    const dataBoards = await api.get<unknown, { boards: IBoard[] }>(`${config.boards}`);
    setBoards(dataBoards.boards);
    setValue('board', dataBoards.boards[0].id);
  };

  const loadBoard = async (): Promise<void> => {
    const dataBoard = await api.get<unknown, IBoardFull>(`${config.boards}/${getValues('board')}`);
    sortCardsByPosition(dataBoard);
    const [listID, cardPos] = getFirstListAndCardValues(dataBoard);
    setValue('list', listID);
    setValue('position', cardPos);
    setCurrentBoard(dataBoard);
    setCurrentListID(listID);
  };
  // click outside
  useEffect(() => {
    const checkIfClickedOutside = (e: Event): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeRelocate();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return (): void => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, []);
  // init data
  useEffect(() => {
    (async function f(): Promise<void> {
      await loadBoards();
      await loadBoard();
    })();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (entity.boardID === +data.board) {
      if (editTitle) {
        const title = data.title.replace(/\s\s+/g, ' ');
        dispatch(
          addCard(getValues('board').toString(), {
            title,
            list_id: getValues('list'),
            position: getValues('position'),
          })
        );
      } else {
        const group = createGroup(
          entity.list,
          currentBoard.lists[currentListID as number],
          entity.card,
          getValues('position') as number
        );
        dispatch(editGroupCards(entity.boardID.toString(), group));
      }
      closeRelocate();
    } else {
      setError('board', { message: 'Relocate to other boards is temporarily unavailable' });
    }
  });

  const handleChangeBoard = async (e: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    register('board').onChange(e);
    await loadBoard();
  };

  const handleChangeList = (e: ChangeEvent<HTMLSelectElement>): void => {
    register('list').onChange(e);
    const listID = getValues('list');
    const [, cardPos] = getFirstListAndCardValues(currentBoard, listID);
    setValue('position', cardPos);
    setCurrentListID(listID);
  };

  return (
    <div className={style.wrapper} ref={ref}>
      <p className={style.header}>{formTitle}</p>
      <form onSubmit={onSubmit}>
        {editTitle && (
          <div className={style.content}>
            {errors.title && <p className={style.error}>{errors.title.message}</p>}
            <p>Название</p>
            <TextareaAutosize
              className={style.titleText}
              {...register('title', {
                pattern: { value: /^[\s\w\p{L}.-]*$/u, message: 'Only letters and numbers' },
                required: { value: true, message: 'Must be filled' },
              })}
              minRows={3}
              autoFocus
              onFocus={(e): void => {
                e.target.select();
              }}
              defaultValue={entity.card.title}
            />
          </div>
        )}

        {errors.board && <p className={style.error}>{errors.board.message}</p>}
        <div className={style.content}>
          <label htmlFor="board">Доска</label>
          <select {...register('board')} onChange={handleChangeBoard}>
            {optionBoards(boards)}
          </select>
        </div>

        <div className={style.contentWrapper}>
          <div className={style.content} style={{ width: '150px' }}>
            <label htmlFor="list">Список</label>
            {currentListID ? (
              <select {...register('list')} onChange={handleChangeList}>
                {optionLists(currentBoard.lists)}
              </select>
            ) : (
              <select {...register('list')} disabled value={-1}>
                <option value={-1}>Нет списков</option>
              </select>
            )}
          </div>

          <div className={style.content} style={{ width: '100px' }}>
            <label htmlFor="card">Позиция</label>
            {currentListID && currentBoard.lists[currentListID]?.cards ? (
              <select {...register('position')}>
                {optionCards(currentBoard.lists[currentListID].cards, +currentListID === entity.list.id)}
              </select>
            ) : (
              <select {...register('position')} disabled value={-1}>
                <option value={-1}>Н/Д</option>
              </select>
            )}
          </div>
        </div>

        <input className={style.submit} type="submit" value={buttonTitle} disabled={!isValid} />
      </form>
    </div>
  );
};

export default FormRelocate;
