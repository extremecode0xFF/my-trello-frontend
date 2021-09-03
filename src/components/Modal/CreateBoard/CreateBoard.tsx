import React, { ChangeEvent, ReactElement, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import AutosizeInput from 'react-input-autosize';
import { createBoard } from '../../../store/modules/boards/actions';
import validator, { pattern } from '../../../common/validator/validator';
import style from './content.module.scss';

export default (): ReactElement => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputText = event.target.value;
    if (validator(pattern, inputText)) {
      setText(inputText);
    }
  };

  const onAddBoard = (): void => {
    if (text) {
      dispatch(createBoard(text.trim()));
    }
  };

  const handlePressEnter = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      onAddBoard();
    }
  };

  return (
    <div className={style.content}>
      <h3>Создание новой доски</h3>
      <AutosizeInput
        injectStyles
        className={style.text}
        autoFocus
        placeholder="Добавить заголовок доски"
        type="text"
        value={text}
        onKeyPress={handlePressEnter}
        onChange={onChangeInput}
      />
      <button className={style.buttonCreate} onClick={onAddBoard}>
        Создать доску
      </button>
    </div>
  );
};
