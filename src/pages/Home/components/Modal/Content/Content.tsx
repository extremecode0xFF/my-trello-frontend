import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AutosizeInput from 'react-input-autosize';
import { createBoard, getBoards } from '../../../../../store/modules/boards/actions';
import validator, { pattern } from '../../../../../common/validator/validator';
import style from './content.module.scss';

export default (): ReactElement => {
  const [text, setText] = useState('');
  const [validText, setValidText] = useState(false);
  const dispatch = useDispatch();
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputText = event.target.value;
    setText(inputText);
    return validator(pattern, inputText) ? setValidText(true) : setValidText(false);
  };
  const onAddBoard = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    validText ? dispatch(createBoard(text)) : console.log('Wrong expression');
  };
  // UseEffect for update boards after close modal window
  useEffect(
    () => (): void => {
      dispatch(getBoards());
    },
    []
  );
  return (
    <div className={style.content}>
      <h3>Создание новой доски</h3>
      <AutosizeInput placeholder="Добавить заголовок доски" type="text" value={text} onChange={onChangeInput} />
      <button className={style.buttonCreate} onClick={onAddBoard}>
        Создать доску
      </button>
    </div>
  );
};
