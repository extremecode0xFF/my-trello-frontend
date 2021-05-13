import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './content.module.scss';
import { createBoard, getBoards } from '../../../../../store/modules/boards/actions';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';

export default (): ReactElement => {
  const [text, setText] = useState('');
  const selectModal = useTypedSelector((state) => state.modal);
  const dispatch = useDispatch();
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };
  const onAddBoard = (): void => {
    dispatch(createBoard(text));
  };
  // UseEffect for update boards after close modal window
  useEffect(
    () => (): void => {
      dispatch(getBoards());
    },
    [selectModal]
  );
  return (
    <div className={style.content}>
      <h3>Создание новой доски</h3>
      <input
        className={style.text}
        placeholder="Добавить заголовок доски"
        type="text"
        value={text}
        onChange={onChangeInput}
      />
      <button className={style.buttonCreate} onClick={onAddBoard}>
        Создать доску
      </button>
    </div>
  );
};
