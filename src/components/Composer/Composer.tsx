import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import validator, { pattern } from '../../common/validator/validator';
import style from './composer.module.scss';

interface Props {
  className: string | undefined;
  buttonTitle: string;
  placeholder?: string;
  action: (title: string) => void;
}

const Composer: FC<Props> = ({ className, buttonTitle, placeholder = '', action }) => {
  const [hide, setHide] = useState(false);
  const [input, setInput] = useState('');

  const toggleHide = (): void => {
    setHide(!hide);
    setInput('');
  };

  const handlerAdd = (): void => {
    action(input);
    toggleHide();
  };

  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (validator(pattern, event.target.value)) {
      setInput(event.target.value);
    }
  };

  const onKeyPressEnter = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter' && input) {
      handlerAdd();
    }
  };

  return (
    <div className={style.wrapper}>
      <button className={hide ? [className, style.hide].join(' ') : className} onClick={toggleHide}>
        + {buttonTitle}
      </button>
      <div className={hide ? style.composer : [style.composer, style.hide].join(' ')}>
        <textarea
          className={style.textArea}
          ref={(field): null | void => field && field.focus()}
          placeholder={placeholder}
          value={input}
          onKeyPress={onKeyPressEnter}
          onChange={handleChangeText}
        />
        <div className={style.control}>
          <button className={style.buttonAdd} onClick={handlerAdd}>
            Добавить
          </button>
          <button className={style.buttonCancel} onClick={toggleHide}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default Composer;
