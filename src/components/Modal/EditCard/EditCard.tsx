import React, { ReactElement, useEffect, useState } from 'react';
import { RouteComponentProps, useHistory, useLocation, useParams, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Modal from '../Modal';
import { EditField } from './EditField/EditField';
import { deleteCard, editCard } from '../../../store/modules/board/actions';
import validator, { pattern } from '../../../common/validator/validator';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ILists } from '../../../common/interfaces/ILists';
import { IList } from '../../../common/interfaces/IList';
import FormRelocate from '../../FormRelocate/FormRelocate';
import style from './editCard.module.scss';

const getListByCardID = (lists: ILists, cardID: number): IList => {
  let foundList: IList = {} as IList;
  Object.values(lists).forEach((list) => {
    const card = Object.values(list.cards).find((value) => value.id === cardID);
    if (card) foundList = list;
  });
  return foundList;
};

const EditCard = (): ReactElement<RouteComponentProps> => {
  const history = useHistory();
  const { id: boardID, cardID } = useParams<{ id: string; cardID: string }>();
  const { state: stateLocation } = useLocation<{ cardID: number; listID: number }>();
  const [modal, setModal] = useState(false);
  const [relocate, setRelocate] = useState(false);
  const [copy, setCopy] = useState(false);
  const lists = useTypedSelector((boardState) => boardState.board.board.lists);
  const originList = getListByCardID(lists, +cardID);
  const originCard = originList.cards[cardID];
  const dispatch = useDispatch();

  useEffect(() => {
    setModal(true);
  }, [stateLocation]);

  const historyBack = (): void => history.replace(`/board/${boardID}`);

  const changeTitle = (text: string): void => {
    if (originCard.title !== text) {
      dispatch(editCard(boardID, originCard.id, { title: text }));
    }
  };
  const handleDeleteCard = (): void => {
    dispatch(deleteCard(boardID, originCard.id));
    history.replace(`/board/${boardID}`);
  };
  const validateTitle = (text: string): boolean => {
    return validator(pattern, text);
  };
  const closeModal = (): void => {
    setModal(false);
    historyBack();
  };
  const closeRelocate = (): void => {
    setRelocate(false);
  };
  const closeCopy = (): void => {
    setCopy(false);
  };
  const changeDescription = (text: string): void => {
    if (originCard.description !== text) {
      if (!text) {
        dispatch(editCard(boardID, originCard.id, { description: null }));
        return;
      }
      dispatch(editCard(boardID, originCard.id, { description: text }));
    }
  };
  const toggleRelocate = (): void => {
    setRelocate((prevRelocate) => !prevRelocate);
  };
  const toggleCopy = (): void => {
    setCopy((prevCopy) => !prevCopy);
  };

  const content = originList ? (
    <div className={style.wrapper}>
      <div className={style.header}>
        <span className={`${style.headerIcon} material-icons-round md-24`}>list_alt</span>
        <EditField className={style.titleCard} text={originCard.title} action={changeTitle} validator={validateTitle} />
        <div>
          В колонке <span className={style.titleList}>{originList.title}</span>
        </div>
      </div>
      <div className={style.main}>
        <span className={`${style.mainIcon} material-icons-round`}>notes</span>
        <div>Описание</div>
        <EditField
          className={style.description}
          text={originCard.description}
          action={changeDescription}
          placeHolder="Добавить более подробное описание..."
        />
      </div>
      <div className={style.side}>
        <h4 className={style.sideTitle}>Действия:</h4>
        <button className={style.button} onClick={toggleCopy}>
          Копирование
        </button>
        <button className={style.button} onClick={toggleRelocate}>
          Перемещение
        </button>
        <button className={style.button} onClick={handleDeleteCard}>
          Удалить
        </button>
      </div>
      {relocate ? (
        <FormRelocate
          formTitle="Перемещение карточки"
          buttonTitle="Переместить"
          entity={{
            card: originCard,
            list: originList,
            boardID: +boardID,
          }}
          closeModal={closeModal}
          closeRelocate={closeRelocate}
          editTitle={false}
        />
      ) : null}
      {copy ? (
        <FormRelocate
          formTitle="Копирование карточки"
          buttonTitle="Создать карточку"
          entity={{
            card: originCard,
            list: originList,
            boardID: +boardID,
          }}
          closeModal={closeModal}
          closeRelocate={closeCopy}
          editTitle
        />
      ) : null}
    </div>
  ) : null;

  return (
    <Modal active={modal} setActive={setModal} onClose={historyBack}>
      {content}
    </Modal>
  );
};

export default withRouter(EditCard);
