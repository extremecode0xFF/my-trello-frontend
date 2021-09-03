import React, { ChangeEvent, FC, FocusEvent, KeyboardEvent, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import validator, { pattern } from '../../common/validator/validator';
import style from './editor.module.scss';

interface Props {
  title: string;
  placeHolder?: string;
  action: (text: string) => void;
  className: string | undefined;
}

const Editor: FC<Props> = ({ className, title, action }) => {
  const [isHide, setHide] = useState(false);
  const [text, setText] = useState(title);

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
      action(event.target.value);
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
