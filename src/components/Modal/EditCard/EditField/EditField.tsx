import React, { ChangeEvent, FC, useState, KeyboardEvent } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

type Props = {
  text: string;
  className?: string;
  placeHolder?: string;
  action?: (title: string) => void;
  validator?: (text: string) => boolean;
};

export const EditField: FC<Props> = ({ text, className, action, validator, placeHolder }) => {
  const [value, setValue] = useState<string>(text);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    if (validator) {
      if (validator(event.target.value)) {
        setValue(event.target.value);
      }
      return;
    }
    setValue(event.target.value);
  };

  const handleSubmit = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
    if (action) {
      e.target.value.trim();
      action(e.target.value);
    }
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === 'Escape') {
      e.currentTarget.value = text;
      e.currentTarget.blur();
    } else if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };
  return (
    <TextareaAutosize
      className={className}
      onKeyDown={handleOnKeyDown}
      onChange={handleChange}
      onBlur={handleSubmit}
      value={value}
      placeholder={placeHolder}
    />
  );
};
