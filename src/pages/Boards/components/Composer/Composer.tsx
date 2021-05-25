import React, { ChangeEvent, useState } from 'react';
import style from './composer.module.scss';

interface Props {
  buttonTitle: string;
  placeholder: string;
  addList: (data: { title: string; position: number }) => void;
}

export const Composer = ({ buttonTitle, placeholder, addList }: Props): React.ReactElement => {
  const [hide, setHide] = useState(false);
  const [input, setInput] = useState('');

  const handleClickButton = (): void => {
    setHide(!hide);
  };

  const handleClickAdd = (): void => {
    addList({ title: input, position: 1 });
    setHide(!hide);
  };

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setInput(event.target.value);
  };

  return (
    <div className={style.wrapper}>
      <button className={hide ? [style.button, style.hide].join(' ') : style.button} onClick={handleClickButton}>
        + {buttonTitle}
      </button>
      <div className={hide ? style.composerControl : [style.composerControl, style.hide].join(' ')}>
        <textarea placeholder={placeholder} value={input} onChange={handleChangeText} />
        <div className={style.control}>
          <button onClick={handleClickAdd}>Добавить</button>
          <button onClick={handleClickButton}>X</button>
        </div>
      </div>
    </div>
  );
};
