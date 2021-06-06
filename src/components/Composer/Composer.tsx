import React, { ChangeEvent, KeyboardEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ActionsTypeAdd, addCard, addList } from '../../store/modules/board/actions';
import validator, { pattern } from '../../common/validator/validator';
import style from './composer.module.scss';

interface Props {
  buttonTitle: string;
  placeholder?: string;
  action: ActionsTypeAdd;
  listID?: number;
}

const Composer: FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  buttonTitle,
  placeholder = '',
  action,
  listID = 0,
}) => {
  const [hide, setHide] = useState(false);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const toggleHide = (): void => {
    setHide(!hide);
    setInput('');
  };

  const handlerAdd = (): void => {
    switch (action) {
      case addList:
        dispatch(addList(id, { title: input }));
        break;
      case addCard:
        dispatch(addCard(id, { title: input, list_id: listID }));
        break;
      default:
    }
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
