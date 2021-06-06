import React, { ChangeEvent, FC, FocusEvent, KeyboardEvent, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ActionsTypeEdit, editCard, editList } from '../../store/modules/board/actions';
import validator, { pattern } from '../../common/validator/validator';
import style from './editor.module.scss';

interface Props {
  title: string;
  placeHolder?: string;
  entityID: number;
  action: ActionsTypeEdit;
}

const Editor: FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ className, title, entityID, action }) => {
  const [isHide, setHide] = useState(false);
  const [text, setText] = useState(title);
  const dispatch = useDispatch();
  const { id: boardID } = useParams<{ id: string }>();

  const handleToggleHide = (): void => {
    setHide(!isHide);
  };

  const handleEditText = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (validator(pattern, event.target.value)) {
      setText(event.target.value);
    }
  };

  const handleFocusOut = (event: FocusEvent<HTMLTextAreaElement>): void => {
    if (event.target.value && event.target.value !== title) {
      setText(event.target.value.trim());
      switch (action) {
        case editList:
          dispatch(editList(boardID, entityID, { title: event.target.value }));
          break;
        case editCard:
          dispatch(editCard(boardID, entityID, { title: event.target.value }));
          break;
        default:
      }
    } else {
      setText(title);
    }
    handleToggleHide();
  };
  const handleClickEnter = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter') {
      event.currentTarget.blur();
    }
  };
  if (!isHide) {
    return (
      <p
        className={
          isHide ? [className, style.modifierTitle, style.hide].join(' ') : [className, style.modifierTitle].join(' ')
        }
        onClick={handleToggleHide}
      >
        {text}
      </p>
    );
  }

  return (
    <TextareaAutosize
      className={[className, style.modifierEditArea].join(' ')}
      autoFocus
      onFocus={(event): void => {
        event.target.select();
      }}
      onBlur={handleFocusOut}
      onKeyPress={handleClickEnter}
      onChange={handleEditText}
      value={text}
    />
  );
};

export default Editor;
