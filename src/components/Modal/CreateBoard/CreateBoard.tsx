import React, { ChangeEvent, ReactElement, KeyboardEvent, useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../../store/modules/boards/actions';
import validator, { pattern } from '../../../common/validator/validator';
import style from './content.module.scss';

export default (): ReactElement => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (refInput.current) {
      refInput.current.select();
    }
  }, []);

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
      <input
        className={style.text}
        ref={refInput}
        placeholder="Введите заголовок доски..."
        type="text"
        value={text}
        onChange={onChangeInput}
        onKeyPress={handlePressEnter}
      />
      <button className={style.buttonCreate} onClick={onAddBoard}>
        Создать доску
      </button>
    </div>
  );
};
